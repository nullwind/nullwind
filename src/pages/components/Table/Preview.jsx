import Nullstack from "nullstack";

import { Table, Avatar, Badge } from "nullwind";

class Preview extends Nullstack {
  render() {
    const people = [
      {
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Alice Smith",
        title: "Frontend Developer",
        email: "alice.smith@example.com",
        status: "Active",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Bob Johnson",
        title: "Backend Developer",
        email: "bob.johnson@example.com",
        status: "Inactive",
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Charlie Brown",
        title: "Fullstack Developer",
        email: "charlie.brown@example.com",
        status: "Active",
      },
    ];

    return (
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH>Name</Table.TH>
            <Table.TH>Title</Table.TH>
            <Table.TH>Email</Table.TH>
            <Table.TH>Status</Table.TH>
            <Table.TH>Actions</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          {people.map((person) => (
            <Table.TR>
              <Table.TD>
                <Avatar src={person.avatar} name={person.name} description="User" />
              </Table.TD>
              <Table.TD>{person.title}</Table.TD>
              <Table.TD>{person.email}</Table.TD>
              <Table.TD>
                <Badge color={person.status === "Active" ? "success" : "danger"}>
                  {person.status}
                </Badge>
              </Table.TD>
              <Table.TD>
                <a href="#" class="text-primary-600 hover:text-primary-900">
                  Edit
                </a>
              </Table.TD>
            </Table.TR>
          ))}
        </Table.TBody>
      </Table>
    );
  }
}

export default Preview;
