export  class TransactionSummary {
    
  private organization: string;
  private year: number;
  private value: number;
  private activity_count: number;
  private count: number;
   
  constructor(props) {
    Object.assign(this, props);
  }

  public getYear(): number{
    return this.year;
  }

  public getOrganization(){
    return this.organization;
  }

  public getValue(){
    return this.value;
  }
}

