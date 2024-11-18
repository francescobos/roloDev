export const listContacts = async (req, res) => {

    res.status(200).json({ message: 'Contacts list' });

}

export const createContact = async (req, res) => {

    res.status(201).json({ message: 'Contact inserted' });
}