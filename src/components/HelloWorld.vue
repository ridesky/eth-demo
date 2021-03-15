<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<el-radio-group v-model="tabSwitch">
			<el-radio-button label="1">KeySpaces</el-radio-button>
			<el-radio-button label="2">存储</el-radio-button>
			<el-radio-button label="3">获取</el-radio-button>
		</el-radio-group>
		<div class="keyspace" v-if="tabSwitch == 1">
			<el-input v-model="keySpaceTab.input0" placeholder="input0"></el-input>
			<el-input v-model="keySpaceTab.input1" placeholder="input1"></el-input>
			<el-button @click="toAddSeed" type="primary">Keyspace 按钮</el-button>
		</div>

		<div class="set" v-if="tabSwitch == 2">
			<el-input v-model="setTab.input0" placeholder="input0"></el-input>
			<div class="flex">
				<el-input
					v-model="setTab.input1"
					class="mini-input"
					style="margin-right: 5px"
					placeholder="input1"
				></el-input>
				<el-input v-model="setTab.input2" placeholder="input2"></el-input>
			</div>
			<el-button type="primary">set 按钮</el-button>
		</div>

		<div class="get" v-if="tabSwitch == 3">
			<el-input v-model="getTab.input0" placeholder="input0"></el-input>
		</div>
	</div>
</template>

<script>
import Web3 from "web3"
window.Web3 = Web3
window.web3 = new Web3(window.ethereum)
const CONTRACT_ADDRESS = "" // todo 此处填写合约地址
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data() {
		return {
			keySpaceTab: {
				input0: "",
				input1: "",
			},
			setTab: {
				input0: "",
				input1: "",
			},
			getTab: {
				input0: "",
			},

			tabSwitch: 1,
		}
	},
	methods: {
		async toAddSeed() {
			const myAddress = (await web3.eth.getAccounts())[0]
			const assetContract = new web3.eth.Contract(
				require("../assets/abi.json"),
				CONTRACT_ADDRESS
			)
			assetContract.methods.addSeed().send({ from: myAddress })
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex {
	display: flex;
}
.hello {
	width: 600px;
	margin: 0 auto;
	.tab-container {
		width: 100%;
	}
	.el-radio-group {
		margin-bottom: 10px;
	}
	.el-input {
		margin-bottom: 10px;
	}
	.mini-input {
		width: 100px;
	}
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
