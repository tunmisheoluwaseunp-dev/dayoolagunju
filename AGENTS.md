<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep portfolio copy and editable proof arrays under src/data; presentation reads them so content changes do not require layout changes.
- Use the existing TanStack Start index route for the single-page experience; preserve the framework bootstrap and use anchor links within the page.
- Keep reusable motion, booking, and calculator controls in src/components/portfolio; all booking buttons share one popup/fallback implementation.
- Store uploaded portrait media as a Lovable Assets pointer; reference assets through their generated URLs.
- Keep published case-study records in `src/data/caseStudies.ts` with their screenshot metadata, and render each record through its dynamic `/work/$slug` page so visibility and project content stay data-driven.
