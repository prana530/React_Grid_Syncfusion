import React, { Component } from "react";
import { getValue } from "@syncfusion/ej2-base";
import { faDollarSign, faRibbon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Search,
  Filter,
  Toolbar,
  ToolbarItems,
  PageSettingsModel,
  Edit,
  EditSettingsModel,
  Column,
} from "@syncfusion/ej2-react-grids";

class GridControl extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      jsonData: null,
    };
  }

  public pageSettings: PageSettingsModel = { pageSize: 4 };

  public toolbarOptions: ToolbarItems[] = [
    "Search",
    "Add",
    "Edit",
    "Delete",
    "Cancel",
  ];

  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };

  setData(data: any) {
    this.setState({
      jsonData: data,
    });
  }

  componentDidMount() {
    fetch(
      "https://ej2services.syncfusion.com/production/web-services/api/orders"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Original record count is " + data.length);
        this.setData(data.filter((d: any) => d.Verified));
      });
  }

  queryCellInfoMethod(args: any) {
    if ((args.column as Column).field === "Freight" && args.data && args.cell) {
      if (getValue("Freight", args.data) < 30) {
        args.cell.classList.add("below-30");
      } else if (getValue("Freight", args.data) < 80) {
        args.cell.classList.add("below-80");
      } else {
        args.cell.classList.add("above-80");
      }
    }
  }

  conditionalTemplate(args: any): any {
    if (args && args.Freight < 5) {
      return (
        <button type="button" className="btn btn-secondary">
          <FontAwesomeIcon icon={faRibbon} /> Silver
        </button>
      );
    } else if (args && args.Freight <= 10) {
      return (
        <button type="button" className="btn btn-warning">
          <FontAwesomeIcon icon={faRibbon} /> Gold
        </button>
      );
    } else if (args && args.Freight > 10) {
      return (
        <button type="button" className="btn btn-info">
          <FontAwesomeIcon icon={faRibbon} /> Platinum
        </button>
      );
    }
  }

  addDollerSign(args: any): any {
    console.log(args);
    return (
      <div>
        <FontAwesomeIcon icon={faDollarSign} size="1x" />{" "}
        {Math.ceil(args.Freight)}
      </div>
    );
  }

  render(): any {
    return (
      <div>
        <GridComponent
          className="grid-contol"
          dataSource={this.state.jsonData}
          allowPaging={true}
          pageSettings={this.pageSettings}
          allowSorting={true}
          toolbar={this.toolbarOptions}
          allowFiltering={true}
          queryCellInfo={this.queryCellInfoMethod}
          allowTextWrap={true}
          textWrapSettings={{ wrapMode: "Content" }}
          editSettings={this.editSettings}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="EmployeeID"
              headerText="Employee ID"
              width="60"
              textAlign="Right"
            />
            <ColumnDirective
              field="CustomerID"
              headerText="Customer ID"
              width="60"
              textAlign="Right"
            />
            <ColumnDirective
              field="OrderID"
              headerText="Order ID"
              width="60"
              textAlign="Right"
            />
            <ColumnDirective
              field="Freight"
              headerText="Freight"
              width="50"
              textAlign="Right"
              format="C2"
              template={this.addDollerSign}
            />
            <ColumnDirective
              field="ShipAddress"
              headerText="Ship Address"
              width="80"
              textAlign="Right"
            />
            <ColumnDirective
              field="OrderDate"
              headerText="Order Date"
              width="80"
              textAlign="Right"
            />
            <ColumnDirective
              field="Subscription"
              headerText="Subscription"
              width="50"
              textAlign="Right"
              template={this.conditionalTemplate}
              allowSorting={false}
            />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Search, Edit, Toolbar, Filter]} />
        </GridComponent>
      </div>
    );
  }
}

export default GridControl;
