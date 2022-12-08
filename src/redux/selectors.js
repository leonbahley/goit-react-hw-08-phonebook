export const getFilter = state => state.filter;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getContactsToRender = state => {
  const contactsSelector = getContacts(state);
  const filterSelector = getFilter(state);
  const contactsToRender = contactsSelector.filter(contact =>
    contact.name.toLowerCase().includes(filterSelector)
  );
  return contactsToRender;
};
