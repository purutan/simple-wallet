//Web3インスタンスの生成
web3 = new Web3();

//RPCプロバイダを設定
//URLの部分は読者の環境に合わせてください。（localhostの部分はIPアドレスにて指定してもかまいません。）
if(!web3.currentProvider)
  web3.setProvider(new web3.providers.HttpProvider("http://192.168.33.10:8545"));

// EthAccounts初期化
EthAccounts.init();

//EthBlocksの初期化
EthBlocks.init();

//Session変数の初期化
initSessionVars();

//Transactionsコレクションの初期化
Transactions = new Mongo.Collection('transactions', {connection: null});

//オブザーバの起動
observeNode();

//Transactionsコレクションの登録状況の監視を開始
observeTransactions();
