import { cleanup, render } from '@testing-library/svelte'
import DefinitionEntry from '$lib/DefinitionEntry.svelte';
import chai from 'chai';
import chaiDom from 'chai-dom';

chai.use(chaiDom);

describe('DefinitionEntry.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', () => {
    const { getByTestId } = render(DefinitionEntry, { background: 'gray' })
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
  });
});