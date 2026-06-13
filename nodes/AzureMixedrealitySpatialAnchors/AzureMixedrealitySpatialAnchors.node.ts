import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMixedrealitySpatialAnchors implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mixedreality Spatial Anchors',
                name: 'N8nDevAzureMixedrealitySpatialAnchors',
                icon: { light: 'file:./azure-mixedreality-spatial-anchors.png', dark: 'file:./azure-mixedreality-spatial-anchors.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Mixed Reality Resource Provider Spatial Anchors Resource API',
                defaults: { name: 'Azure Mixedreality Spatial Anchors' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMixedrealitySpatialAnchorsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
