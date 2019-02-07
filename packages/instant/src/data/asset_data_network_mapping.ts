import * as _ from 'lodash';

import { Network } from '../types';

interface AssetDataByNetwork {
    [Network.Kovan]?: string;
    [Network.Mainnet]?: string;
    [Network.Rinkeby]?: string;
}

export const assetDataNetworkMapping: AssetDataByNetwork[] = [
    // ZRX
    {
        [Network.Mainnet]: '0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498',
        [Network.Kovan]:   '0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa',
        [Network.Rinkeby]: '0xf47261b00000000000000000000000008080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
    },
    // ART
    {
        [Network.Kovan]: '0xf47261b0000000000000000000000000c0859d8f894a9a28dd91445d0f2e9023f9f8e929',
        [Network.Rinkeby]: '0xf47261b0000000000000000000000000c0859d8f894a9a28dd91445d0f2e9023f9f8e929',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000fec0cf7fe078a500abf15f1284958f22049c2c7e',
    },
    // SPANK
    {
        [Network.Mainnet]: '0xf47261b000000000000000000000000042d6622dece394b54999fbd73d108123806f6a18',
        [Network.Kovan]:   '0xf47261b00000000000000000000000007c9eee8448f3a7d1193389652d863b27e543272d',
        [Network.Rinkeby]: '0xf47261b00000000000000000000000007c9eee8448f3a7d1193389652d863b27e543272d',
    },
    // OMG
    {
        [Network.Mainnet]: '0xf47261b0000000000000000000000000d26114cd6ee289accf82350c8d8487fedb8a0c07',
        [Network.Kovan]: '0xf47261b000000000000000000000000046096d8ec059dbaae2950b30e01634ff0dc652ec',
    },
    // MKR
    {
        [Network.Mainnet]: '0xf47261b00000000000000000000000009f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        // 0x Kovan MKR
        [Network.Kovan]: '0xf47261b00000000000000000000000007b6b10caa9e8e9552ba72638ea5b47c25afea1f3',
    },
    // BAT
    {
        [Network.Mainnet]: '0xf47261b00000000000000000000000000d8775f648430679a709e98d2b0cb6250d2887ef',
        [Network.Kovan]: '0xf47261b0000000000000000000000000c87faa7a58f0adf306bad9e7d892fb045a20e5af',
    },
    // SNT
    {
        [Network.Mainnet]: '0xf47261b0000000000000000000000000744d70fdbe2ba4cf95131626614a1763df805b9e',
        [Network.Kovan]: '0xf47261b00000000000000000000000009cfe76a718ea75e3e8ce4fc7ad0fef84be70919b',
    },
    // MANA
    {
        [Network.Mainnet]: '0xf47261b00000000000000000000000000f5d2fb29fb7d3cfee444a200298f468908cc942',
        [Network.Kovan]: '0xf47261b0000000000000000000000000c64edfc78321673435fbeebdaaa7f9d755963542',
    },
    // GNT
    {
        [Network.Mainnet]: '0xf47261b0000000000000000000000000a74476443119a942de498590fe1f2454d7d4ac0d',
        // 0x Kovan GNT
        [Network.Kovan]: '0xf47261b000000000000000000000000031fb614e223706f15d0d3c5f4b08bdf0d5c78623',
    },
    // SUB
    {
        [Network.Mainnet]: '0xf47261b000000000000000000000000012480e24eb5bec1a9d4369cab6a80cad3c0a377a',
    },
    // Dentacoin
    {
        [Network.Mainnet]: '0xf47261b000000000000000000000000008d32b0da63e2C3bcF8019c9c5d849d7a9d791e6',
    },
    // REP
    {
        [Network.Kovan]: '0xf47261b00000000000000000000000008cb3971b8eb709c14616bd556ff6683019e90d9c',
        [Network.Mainnet]: '0xf47261b00000000000000000000000001985365e9f78359a9b6ad760e32412f4a445e862',
    },
    // USDC
    {
        [Network.Kovan]: '',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    }
];

//# exchange: '0xbce0b5f6eb618c565c3e5f5cd69652bbc279f44e',    0x48bacb9266a570d521063ef5dd96e61686dbe788
// # erc20Proxy: '0x2f5ae4f6106e89b4147651688a92256885c5f410',
// # erc721Proxy: '0x7656d773e11ff7383a14dcf09a9c50990481cd10',
// # zrxToken: '0x8080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
// # etherToken: '0xc778417e063141139fce010982780140aa0cd5ab',
// # assetProxyOwner: '0xe1703da878afcebff5b7624a826902af475b9c03',
// # forwarder: '0x2d40589abbdee84961f3a7656b9af7adb0ee5ab4',
// # orderValidator: '0x0c5173a51e26b29d6126c686756fb9fbef71f762',
// # dutchAuction: '0xdd7bd6437e67c422879364740ab5855fe3dc41f7',