

export  class Credit {
    
  public value: number;

  public debenture : string;

  public endDate : number;

  public startDate : number;

  public status : number;

  constructor(props) {
    Object.assign(this, props);
  }
}

