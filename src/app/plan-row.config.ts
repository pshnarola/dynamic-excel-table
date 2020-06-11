export const PLAN_ROWS = [
    {
        "key": "openingStock",
        "isBold": true,
        "isChild": false
    },
    {
        "key": "supplyElements",
        "isBold": true,
        "isChild": false,
        "noValue": true,
    },
    {
        "key": "plannedProductionReceipts",
        "isBold": false,
        "isChild": true,
        "parent": "supplyElements"
    },
    {
        "key": "confirmedProductionReceipts",
        "isBold": false,
        "isChild": true,
        "parent": "supplyElements"
    },
    {
        "key": "plannedDistributionReceipts",
        "isBold": false,
        "isChild": true,
        "parent": "supplyElements"
    },
    {
        "key": "confirmedDistributionReceipts",
        "isBold": false,
        "isChild": true,
        "parent": "supplyElements"
    },
    {
        "key": "demandElements",
        "isBold": true,
        "isChild": false,
        "noValue": true
    },
    {
        "key": "forecast",
        "isBold": false,
        "isChild": true,
        "parent": "demandElements",
        "isEditable": true
    },
    {
        "key": "salesOrder",
        "isBold": false,
        "isChild": true,
        "parent": "demandElements"
    },
    {
        "key": "totalCustomerDemandValue",
        "isBold": true,
        "isChild": false
    },
    {
        "key": "distributionDemand",
        "isBold": false,
        "isChild": true,
        "parent": "totalCustomerDemand"
    },
    {
        "key": "bomDemand",
        "isBold": false,
        "isChild": true,
        "parent": "totalCustomerDemand"
    },
    {
        "key": "dependentDemand",
        "isBold": true,
        "isChild": false
    },
    {
        "key": "totalDemand",
        "isBold": true,
        "isChild": false
    },
    {
        "key": "totalReceipts",
        "isBold": true,
        "isChild": false,
        "isEditable": true
    },
    {
        "key": "safetyStock",
        "isBold": true,
        "isChild": false
    },
    {
        "key": "netRequirement",
        "isBold": true,
        "isChild": false
    }
]