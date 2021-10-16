const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MultiSigWallet tests', function() {
    let wallet;
    let owner;
    let addr1;
    let addr2;

    before(async function() {
        const walletFactory = await ethers.getContractFactory('MultiSigWallet');

        [owner, addr1, addr2] = await ethers.getSigners();

        wallet = await walletFactory.deploy([owner.address], 1);
        await wallet.deployed();

        await wallet.deposit({ value: "1000000000000000" });
    });

    it('Should submit a transaction', async function() {
        await wallet.submitTransaction(owner.address, "0x0", "1000000000000000");
        await wallet.approveTransaction(0);

        const transaction = await wallet.transactions(0);
        expect(transaction.to).to.equal(owner.address);
    });
});