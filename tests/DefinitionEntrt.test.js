import { cleanup, render } from '@testing-library/svelte'
import DefinitionEntry from '$lib/DefinitionEntry.svelte';
import chai from 'chai';
import chaiDom from 'chai-dom';
// import svelte from 'svelte-testing';

chai.use(chaiDom);

describe('DefinitionEntry.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', () => {
    // const { getByTestId } = render(DefinitionEntry, { background: 'gray' })
    // debugger;
    const { getByTestId } = render(svelte`
      <DefinitionEntry background="gray"></DefinitionEntry>
    `)
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
  });
});