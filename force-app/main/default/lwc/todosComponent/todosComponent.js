import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

import TODO_OBJECT from '@salesforce/schema/Todo__c';
import NAME_FIELD from '@salesforce/schema/Todo__c.Name';

export default class TodosComponent extends LightningElement {
    @wire(getListUi, {
        objectApiName: TODO_OBJECT,
        listViewApiName: 'All',
        sortBy: NAME_FIELD
    })
    listView;

    get todos() {
        return this.listView.data.records.records;
    }
}
