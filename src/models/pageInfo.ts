class PageInfo {
  public readonly href : string;

  constructor() {
    this.href = window.location.href;
  }
}

export default PageInfo;
