async function main() {
    const walletFactory = await ethers.getContractFactory('MultiSigWallet');

    const wallet = await walletFactory.deploy([`${process.env.PUBLIC_KEY}`], 1);
    console.log('address:', wallet.address);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });