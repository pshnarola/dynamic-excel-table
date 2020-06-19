export const PLAN_ROWS = [
    {
        key: 'openingStock',
        title: 'Opening Stock',
        isBold: true,
        isChild: false
    },
    {
        key: 'demandElements',
        title: 'Demand Elements',
        isBold: true,
        isChild: false,
        noValue: true
    },
    {
        key: 'forecast',
        title: 'Forecast',
        isBold: false,
        isChild: true,
        parent: 'demandElements'
    },
    {
        key: 'salesOrder',
        title: 'Sales Order',
        isBold: false,
        isChild: true,
        parent: 'demandElements'
    },
    {
        key: 'totalCustomerDemandValue',
        title: 'Total Customer Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'distributionDemand',
        title: 'Distribution Demand',
        isBold: false,
        isChild: true,
        parent: 'totalCustomerDemand'
    },
    {
        key: 'bomDemand',
        title: 'Bom Demand',
        isBold: false,
        isChild: true,
        parent: 'totalCustomerDemand'
    },
    {
        key: 'dependentDemand',
        title: 'Dependent Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'totalDemand',
        title: 'Total Demand',
        isBold: true,
        isChild: false
    },
    {
        key: 'supplyElements',
        title: 'Supply Elements',
        isBold: true,
        isChild: false,
        noValue: true,
    },
    {
        key: 'plannedProductionReceipts',
        title: 'Planned Production Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'confirmedProductionReceipts',
        title: 'Confirmed Production Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'plannedDistributionReceipts',
        title: 'Planned Distribution Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'confirmedDistributionReceipts',
        title: 'Confirmed Distribution Receipts',
        isBold: false,
        isChild: true,
        parent: 'supplyElements'
    },
    {
        key: 'totalReceipts',
        title: 'Total Receipts',
        isBold: true,
        isChild: false,
        isEditable: true
    },
    {
        key: 'safetyStock',
        title: 'Safety Stock',
        isBold: true,
        isChild: false
    },
    {
        key: 'netRequirement',
        title: 'Net Requirement',
        isBold: true,
        isChild: false
    }
];

export const PLAN_COLUMNS = {
    columnIdentifier: 'columnName',
    columns: [
        {
            key: 'rowHeader',
            data: 'rowHeader',
            title: 'Key Figure',
            isBold: true,
            textAlign: 'left',
            isEditable: false
        },
        {
            key: 'unit',
            data: 'unit',
            title: 'Unit',
            isBold: true,
            textAlign: 'left',
            isEditable: false
        },
        {
            key: 'wk_01',
            data: 'wk_01',
            title: 'Week 01',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_02',
            data: 'wk_02',
            title: 'Week 02',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_03',
            data: 'wk_03',
            title: 'Week 03',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_04',
            data: 'wk_04',
            title: 'Week 04',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_05',
            data: 'wk_05',
            title: 'Week 05',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_06',
            data: 'wk_06',
            title: 'Week 06',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_07',
            data: 'wk_07',
            title: 'Week 07',
            textAlign: 'right',
            isEditable: true
        },
        {
            key: 'wk_08',
            data: 'wk_08',
            title: 'Week 08',
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
