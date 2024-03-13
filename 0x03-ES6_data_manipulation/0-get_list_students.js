/**
 * this will get a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Mikias', location: 'Oromia' },
    { id: 2, firstName: 'Eyob', location: 'Gambela' },
    { id: 5, firstName: 'Abebe', location: 'Addis ababa' },
  ];
}
