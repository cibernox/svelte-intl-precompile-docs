import { cleanup, render } from '@testing-library/svelte'
import DefinitionEntry from '$lib/DefinitionEntry.svelte';

describe('DefinitionEntry.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', () => {
    const { getByTestId } = render(DefinitionEntry, { background: 'gray' })
    console.log("getByTestId('definition-entry')", getByTestId('definition-entry'));
    console.log("to.have->", expect(getByTestId('definition-entry')).to.have);
    console.log("to.have.class->", expect(getByTestId('definition-entry')).to.have.class);
    debugger;
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
  });
});