# Getting started

Get all encoded metaplex metadata with the following command:

```
curl https://ssc-dao.genesysgo.net/ -X POST -H "Content-Type: application/json" -d '
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getProgramAccounts",
    "params": [
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
      {
        "filters": [
          {
            "dataSize": 679
          }
        ],
        "encoding": "jsonParsed"
      }
    ]
  }
' > metadata.json
```

Then execute the script by running:
```
npx ts-node index.ts 
```