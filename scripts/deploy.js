async function main() {
    const walletFactory = await ethers.getContractFactory('MultiSigWallet');

    const wallet = await walletFactory.deploy(['0x1cD8d1d79AA869c5e9EA80964ab883EB56785B7c'], 1);
    console.log('address:', wallet.address);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });