import * as _ from 'lodash';

import { Network } from '../types';

interface AssetDataByNetwork {
    [Network.Kovan]?: string;
    [Network.Mainnet]?: string;
    [Network.Rinkeby]?: string;
}

export const assetDataNetworkMapping: AssetDataByNetwork[] = [
    // ART
    {
        [Network.Kovan]:   '0xf47261b0000000000000000000000000c0859d8f894a9a28dd91445d0f2e9023f9f8e929',
        [Network.Rinkeby]: '0xf47261b0000000000000000000000000c0859d8f894a9a28dd91445d0f2e9023f9f8e929',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000fec0cf7fe078a500abf15f1284958f22049c2c7e',
    },
    // USDC
    {
        [Network.Kovan]:   '0xf47261b0000000000000000000000000aaded8f5af86cf7e6cef1844f67ff534a80f410e',
        [Network.Rinkeby]: '0xf47261b0000000000000000000000000aaded8f5af86cf7e6cef1844f67ff534a80f410e',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000b9e31a22e3a1c743c6720f3b723923e91f3c0f8b',
    },
    // GUSD
    {
        [Network.Kovan]:   '0xf47261b0000000000000000000000000d0309e3c3ff6433b86232ac51c4f64a92da6b994',
        [Network.Rinkeby]: '0xf47261b0000000000000000000000000d0309e3c3ff6433b86232ac51c4f64a92da6b994',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    },
    // DAI
    {
        [Network.Rinkeby]: '0xf47261b00000000000000000000000000cb2e306fd0d4d28fa7f406c60fcde762a197af1d',
        [Network.Mainnet]: '0xf47261b0000000000000000000000000089d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    },
    // ZRX
    {
        [Network.Mainnet]: '0xf47261b0000000000000000000000000e41d2489571d322189246dafa5ebde1f4699f498',
        [Network.Kovan]:   '0xf47261b00000000000000000000000002002d3812f58e35f0ea1ffbf80a75a38c32175fa',
        [Network.Rinkeby]: '0xf47261b00000000000000000000000008080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa',
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
        [Network.Kovan]:   '0xf47261b000000000000000000000000046096d8ec059dbaae2950b30e01634ff0dc652ec',
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
        [Network.Kovan]:   '0xf47261b00000000000000000000000008cb3971b8eb709c14616bd556ff6683019e90d9c',
        [Network.Mainnet]: '0xf47261b00000000000000000000000001985365e9f78359a9b6ad760e32412f4a445e862',
    }
];