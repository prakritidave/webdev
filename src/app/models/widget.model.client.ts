export class Widget {
  _id: String;
  widgettype: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;
  rows: Number;
  name: String;
  placeholder: String;
  formatted: Boolean;

  constructor(_id, widgettype, pageId, size: String= '1', text: String= 'text', width: String = '100%',
              url: String = 'url', rows: Number = 0, name: String = '', placeholder: String = '',
              formatted: Boolean = false) {
    this._id = _id;
    this.widgettype = widgettype;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
    this.rows = rows;
    this.name = name;
    this.placeholder = placeholder;
    this.formatted = formatted;
  }
}
