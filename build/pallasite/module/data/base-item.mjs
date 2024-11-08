import Pallasite1eDataModel from "./base-model.mjs";

export default class Pallasite1eItemBase extends Pallasite1eDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}