import Nullstack from "nullstack";

import { Table, Avatar, Badge } from "nullwind";

class Preview extends Nullstack {
  render() {
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
          <Table.TR>
            <Table.TD class="font-medium text-gray-900">
              <Avatar src="/avatar.avif" name="John Doe" description="User" />
            </Table.TD>
            <Table.TD>Software Engineer</Table.TD>
            <Table.TD>user@ae.studio</Table.TD>
            <Table.TD>
              <Badge color="success">Active</Badge>
            </Table.TD>
            <Table.TD class="space-x-2">
              <a href="#" class="text-primary-600 hover:text-primary-900">
                Edit
              </a>
            </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD class="font-medium text-gray-900">
              <Avatar src="/avatar.avif" name="John Doe" description="User" />
            </Table.TD>
            <Table.TD>Software Engineer</Table.TD>
            <Table.TD>user@ae.studio</Table.TD>
            <Table.TD>
              <Badge color="warning">Pending</Badge>
            </Table.TD>
            <Table.TD class="space-x-2">
              <a href="#" class="text-primary-600 hover:text-primary-900">
                Edit
              </a>
            </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD class="font-medium text-gray-900">
              <Avatar name="John Doe" description="User" />
            </Table.TD>
            <Table.TD>Software Engineer</Table.TD>
            <Table.TD>user@ae.studio</Table.TD>
            <Table.TD>
              <Badge color="danger">Inactive</Badge>
            </Table.TD>
            <Table.TD class="space-x-2">
              <a href="#" class="text-primary-600 hover:text-primary-900">
                Edit
              </a>
            </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    );
  }
}

export default Preview;
