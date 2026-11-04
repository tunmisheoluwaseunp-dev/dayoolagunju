-- Run once in Supabase SQL Editor. No secret key belongs in the website.
begin;
create table public.portfolio_admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.portfolio_admins enable row level security;
create policy "Admins can check their membership" on public.portfolio_admins for select to authenticated using (user_id = (select auth.uid()));
create table public.portfolio_content (
 id text primary key check (id in ('draft','published')),
 content jsonb not null check (jsonb_typeof(content) = 'object'),
 updated_at timestamptz not null default now()
);
alter table public.portfolio_content enable row level security;
create policy "Visitors read published content" on public.portfolio_content for select to anon,authenticated using (id='published');
create policy "Admins manage content" on public.portfolio_content for all to authenticated
 using (exists(select 1 from public.portfolio_admins where user_id=(select auth.uid())))
 with check (exists(select 1 from public.portfolio_admins where user_id=(select auth.uid())));
grant select on public.portfolio_admins to authenticated;
grant select on public.portfolio_content to anon;
grant select,insert,update,delete on public.portfolio_content to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('portfolio','portfolio',true,10485760,array['image/jpeg','image/png','image/webp','image/avif']) on conflict(id) do nothing;
create policy "Public portfolio images" on storage.objects for select to anon,authenticated using(bucket_id='portfolio');
create policy "Admins upload portfolio images" on storage.objects for insert to authenticated
with check(bucket_id='portfolio' and exists(select 1 from public.portfolio_admins where user_id=(select auth.uid())));
-- Immutable unique filenames; replacing an image uploads a new object.
commit;
-- After creating your account in Authentication > Users, run this separately:
-- insert into public.portfolio_admins(user_id) values ('YOUR-AUTH-USER-UUID');
