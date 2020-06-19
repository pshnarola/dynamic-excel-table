export const PLAN_ROWS = [
    {
        key: 'openingStock',
        text: 'Opening Stock',
        isBold: true,
        isChild: false
    },
    {
        key: 'demandElements',
        text: 'Demand Elements',
        isBold: true,
        isChild: false,
        noValue: true
    },
    {
        key: 'forecast',
        text: 'Forecast',
        isBold: false,
        isChild: true,
        parent: 'demandElements'
    },
    {
        key: 'salesOrder',
        text: 'Sales Order',
        isBold: false,
        isChild: true,
        parent: 'demandElements'
    },
    {
        key: 'totalCustomerDemandValue',
        text: 'Total Customer Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'distributionDemand',
        text: 'Distribution Demand',
        isBold: false,
        isChild: true,
        parent: 'totalCustomerDemand'
    },
    {
        key: 'bomDemand',
        text: 'Bom Demand',
        isBold: false,
        isChild: true,
        parent: 'totalCustomerDemand'
    },
    {
        key: 'dependentDemand',
        text: 'Dependent Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'totalDemand',
        text: 'Total Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'supplyElements',
        text: 'Supply Elements',
        isBold: true,
        isChild: false,
        noValue: true,
    },
    {
        key: 'plannedProductionReceipts',
        text: 'Planned Production Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'confirmedProductionReceipts',
        text: 'Confirmed Production Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'plannedDistributionReceipts',
        text: 'Planned Distribution Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'confirmedDistributionReceipts',
        text: 'Confirmed Distribution Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'totalReceipts',
        text: 'Total Receipts',
        isBold: true,
        isChild: false,
        isEditable: true
    },
    {
        key: 'safetyStock',
        text: 'Safety Stock',
        isBold: true,
        isChild: false
    },
    {
        key: 'netRequirement',
        text: 'Net Requirement',
        isBold: true,
        isChild: false
    }
];

export const PLAN_COLUMNS = {
    columnIdentifier: 'columnName',
    columns: [
        {
            key: 'rowHeader',
            text: 'Key Figure',
            isBold: true,
            textAlign: 'left',
            isEditable: false
        },
        {
            key: 'unit',
            text: 'Unit',
            isBold: true,
            textAlign: 'left',
            isEditable: false
        },
        {
            key: 'wk_01',
            text: 'Week 01',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_02',
            text: 'Week 02',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_03',
            text: 'Week 03',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_04',
            text: 'Week 04',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_05',
            text: 'Week 05',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_06',
            text: 'Week 06',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_07',
            text: 'Week 07',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_08',
            text: 'Week 08',
            textAlign: 'right',
            isEditable: true
        }
    ]
};

export const rowHeader = {
    columnName: 'rowHeader',
    openingStock: 'openingStock',
    demandElements: {
        forecast: 'forecast',
        salesOrder: 'EA',
    },
    totalCustomerDemandValue: 'EA',
    totalCustomerDemand: {
        distributionDemand: 'EA',
        bomDemand: 'EA',
    },
    dependentDemand: 'EA',
    totalDemand: 'EA',
    supplyElements: {
        plannedProductionReceipts: 'EA',
        confirmedProductionReceipts: 'EA',
        plannedDistributionReceipts: 'EA',
        confirmedDistributionReceipts: 'EA',
    },
    totalReceipts: 'EA',
    safetyStock: 'EA',
    netRequirement: 'EA',
};

export const unitRes = {
    columnName: 'unit',
    openingStock: 'EA',
    demandElements: {
        forecast: 'EA',
        salesOrder: 'EA',
    },
    totalCustomerDemandValue: 'EA',
    totalCustomerDemand: {
        distributionDemand: 'EA',
        bomDemand: 'EA',
    },
    dependentDemand: 'EA',
    totalDemand: 'EA',
    supplyElements: {
        plannedProductionReceipts: 'EA',
        confirmedProductionReceipts: 'EA',
        plannedDistributionReceipts: 'EA',
        confirmedDistributionReceipts: 'EA',
    },
    totalReceipts: 'EA',
    safetyStock: 'EA',
    netRequirement: 'EA',
};

export const tableDetails = [
    {
        columnName: 'wk_01',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_02',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_03',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_04',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_05',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_06',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_07',
        openingStock: 100,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    },
    {
        columnName: 'wk_08',
        openingStock: 800,
        demandElements: {
            forecast: 97,
            salesOrder: 13
        },
        totalCustomerDemandValue: 110,
        totalCustomerDemand: {
            distributionDemand: 57,
            bomDemand: 0
        },
        dependentDemand: 57,
        totalDemand: 167,
        supplyElements: {
            plannedProductionReceipts: 0,
            confirmedProductionReceipts: 100,
            plannedDistributionReceipts: 0,
            confirmedDistributionReceipts: 0
        },
        totalReceipts: 100,
        safetyStock: 484,
        netRequirement: 700
    }
];
