"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitCounter = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
const dynamodb = require("aws-cdk-lib/aws-dynamodb");
const constructs_1 = require("constructs");
class HitCounter extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const table = new dynamodb.Table(this, 'Hits', {
            partitionKey: { name: 'path', type: dynamodb.AttributeType.STRING }
        });
        this.handler = new lambda.Function(this, 'HitCounterHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hitcounter.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                HITS_TABLE_NAME: table.tableName
            }
        });
        // grant the lambda role read/write permissions to our table
        table.grantReadWriteData(this.handler);
        // grant the lambda role invoke permissions to the downstream function
        props.downstream.grantInvoke(this.handler);
    }
}
exports.HitCounter = HitCounter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl0Y291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpdGNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaURBQWlEO0FBQ2pELHFEQUFxRDtBQUNyRCwyQ0FBdUM7QUFNdkMsTUFBYSxVQUFXLFNBQVEsc0JBQVM7SUFHdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzNDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1NBQ3RFLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUMxRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxXQUFXLEVBQUU7Z0JBQ1Qsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZO2dCQUN2RCxlQUFlLEVBQUUsS0FBSyxDQUFDLFNBQVM7YUFDbkM7U0FDSixDQUFDLENBQUM7UUFFSCw0REFBNEQ7UUFDNUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxzRUFBc0U7UUFDdEUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQTFCRCxnQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpdENvdW50ZXJQcm9wcyB7XG4gIGRvd25zdHJlYW06IGxhbWJkYS5JRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBIaXRDb3VudGVyIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IGhhbmRsZXI6IGxhbWJkYS5GdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSGl0Q291bnRlclByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsICdIaXRzJywge1xuICAgICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ3BhdGgnLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIaXRDb3VudGVySGFuZGxlcicsIHtcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgICAgIGhhbmRsZXI6ICdoaXRjb3VudGVyLmhhbmRsZXInLFxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxuICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgICAgRE9XTlNUUkVBTV9GVU5DVElPTl9OQU1FOiBwcm9wcy5kb3duc3RyZWFtLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIEhJVFNfVEFCTEVfTkFNRTogdGFibGUudGFibGVOYW1lXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGdyYW50IHRoZSBsYW1iZGEgcm9sZSByZWFkL3dyaXRlIHBlcm1pc3Npb25zIHRvIG91ciB0YWJsZVxuICAgIHRhYmxlLmdyYW50UmVhZFdyaXRlRGF0YSh0aGlzLmhhbmRsZXIpO1xuXG4gICAgLy8gZ3JhbnQgdGhlIGxhbWJkYSByb2xlIGludm9rZSBwZXJtaXNzaW9ucyB0byB0aGUgZG93bnN0cmVhbSBmdW5jdGlvblxuICAgIHByb3BzLmRvd25zdHJlYW0uZ3JhbnRJbnZva2UodGhpcy5oYW5kbGVyKTtcbiAgfVxufVxuIl19