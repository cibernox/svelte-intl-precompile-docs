import { cleanup, render } from '@testing-library/svelte'
import { svelte } from 'vite-plugin-svelte-inline-components';

describe('NavLink.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', async () => {
    const { getByTestId } = render(await svelte`
      <script>import NavLink from '$lib/NavLink.svelte';</script>
      <NavLink href="/foo/bar">Link text</NavLink>
    `);
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
    expect(getByTestId('dt')).to.have.text("I'm the description term");
    expect(getByTestId('dd')).to.have.text("I'm the description definition");
  });
});