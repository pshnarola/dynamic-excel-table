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

export const tableDetails = [
    {
        columnName: 'wk. 01',
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
        columnName: 'wk. 02',
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
        columnName: 'wk. 03',
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
        columnName: 'wk. 04',
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
        columnName: 'wk. 05',
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
        columnName: 'wk. 06',
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
        columnName: 'wk. 07',
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
        columnName: 'wk. 08',
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
    }
];
