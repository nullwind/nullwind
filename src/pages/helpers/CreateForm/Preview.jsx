import Nullstack from "nullstack";

import { createForm, XIcon } from "nullwind";
import { bool, object, string } from "yup";

import { Alert, Button, Checkbox, Select, Textarea, TextInput, Toggle } from "~/components";

const validationSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  streetAddress: string().required("Street Address is required"),
  streetAddressComplement: string(),
  country: string().required("Country/Region is required"),
  state: string().required("State/Province is required"),
  city: string().required("City is required"),
  zip: string().required("Zip/Postal is required"),
  notes: string().required("Notes is required"),
  notifications: bool(),
  termsAndConditions: string().required("You must agree to the terms and conditions"),
});

class Preview extends Nullstack {
  form = {
    data: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      streetAddressComplement: "",
      country: null,
      state: null,
      city: "",
      zip: "",
      notes: "",
      notifications: false,
      termsAndConditions: false,
    },
    errors: {},
  };
  countries = [
    { value: "US", label: "United States" },
    { value: "AX", label: "Åland Islands" },
    { value: "AL", label: "Albania" },
  ];
  states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
  ];

  hydrate() {
    this.form = createForm({ validationSchema, initialValues: this.form.data });
  }

  async send() {
    await this.form.validate();

    if (this.form.isValid) {
      alert("Form is valid!");
    }
  }

  render() {
    return (
      <div class="preview max-w-lg mx-auto">
        <form onsubmit={this.send} class="grid gap-6">
          <div class="grid grid-cols-2 gap-x-4">
            <TextInput
              label="First Name"
              bind={this.form.data.firstName}
              error={this.form.errors.firstName}
            />
            <TextInput
              label="Last Name"
              bind={this.form.data.lastName}
              error={this.form.errors.lastName}
            />
          </div>
          <TextInput
            label="Street Address"
            bind={this.form.data.streetAddress}
            error={this.form.errors.streetAddress}
          />
          <TextInput
            label="Street Address Complement"
            bind={this.form.data.streetAddressComplement}
            error={this.form.errors.streetAddressComplement}
          />
          <div class="grid grid-cols-2 gap-x-4">
            <Select label="Country/Region" bind={this.form.data.country}>
              <option value="">Select a country</option>
              {this.countries.map((country) => (
                <option value={country.value}>{country.label}</option>
              ))}
            </Select>
            <Select label="State / Province" bind={this.form.data.state}>
              <option value="">Select a state</option>
              {this.states.map((state) => (
                <option value={state.value}>{state.label}</option>
              ))}
            </Select>
          </div>
          <div class="grid grid-cols-2 gap-x-4">
            <TextInput label="City" bind={this.form.data.city} error={this.form.errors.city} />
            <TextInput label="Zip/Postal" bind={this.form.data.zip} error={this.form.errors.zip} />
          </div>
          <Textarea label="Notes" bind={this.form.data.notes} error={this.form.errors.notes} />
          <hr />
          <div>
            <div class="flex items-center gap-2">
              <Toggle bind={this.form.data.notifications} />{" "}
              <h4 class="block text-sm font-medium text-gray-700">Allow notifications</h4>
            </div>
          </div>
          <hr />
          <Checkbox
            id="terms-and-conditions"
            label="I agree to the terms and conditions"
            bind={this.form.data.termsAndConditions}
            error={this.form.errors.termsAndConditions}
          />
          {Object.keys(this.form.errors).length > 0 && (
            <Alert color="danger" icon={XIcon}>
              <h4>Please, fill all the fields before submitting the form.</h4>
            </Alert>
          )}
          <div class="flex gap-3">
            <Button type="submit">Submit</Button>
            <Button color="secondary">Cancel</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Preview;
