const AWS = require("aws-sdk");

const deleteTodo = async event => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    await dynamodb
        .delete({
            TableName: "TodoTable",
            Key: { id },

            ReturnValues: "ALL_OLD",
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "Todo deleted",
        }),
    };
};

module.exports = {
    handler: deleteTodo,
};
