import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMixedrealitySpatialAnchorsApi implements ICredentialType {
        name = 'N8nDevAzureMixedrealitySpatialAnchorsApi';

        displayName = 'Azure Mixedreality Spatial Anchors API';

        icon: Icon = { light: 'file:../nodes/AzureMixedrealitySpatialAnchors/azure-mixedreality-spatial-anchors.png', dark: 'file:../nodes/AzureMixedrealitySpatialAnchors/azure-mixedreality-spatial-anchors.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mixedreality Spatial Anchors API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
