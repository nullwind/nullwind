import { Avatar, Badge, Table } from "nullwind";

export default () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
      email: "foo@bar.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Paul Smith",
      title: "Product Manager",
      email: "foo@bar.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Data Analyst",
      email: "foo@bar.com",
      status: "Active",
    },
  ];

  const rows = users.map((user) => (
    <tr>
      <td>
        <Avatar
          src={`https://xsgames.co/randomusers/avatar.php?g=male&name=${user.name}`}
          name={user.name}
          description="User"
        />
      </td>
      <td>{user.title}</td>
      <td>{user.email}</td>
      <td>
        <Badge color="success">{user.status}</Badge>
      </td>
      <td class="space-x-2">
        <a href="#" class="text-primary-600 underline">
          Edit
        </a>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
