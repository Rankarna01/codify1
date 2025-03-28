import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminDashboard = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
};

export default AdminDashboard;
