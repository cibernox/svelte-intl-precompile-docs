import { cleanup, render } from '@testing-library/svelte'
import NavLink from '$lib/NavLink.svelte';
import svelte from 'svelte-inline-compile';

describe('NavLink.svelte', () => {
  afterEach(() => cleanup())

  it('renders a link with the given href', () => {
    const { getByTestId } = render(svelte`
      <NavLink href="foo/bar">Text inside</NavLink>
    `)
    expect(getByTestId('nav-link-anchor')).to.have.text('Text inside');
  });
});