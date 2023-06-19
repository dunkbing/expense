import React from 'react';

const Gap = () => <div style={{ width: 20, height: 20 }} />;

const XS = () => <div style={{ width: 10, height: 10 }} />;

const S = () => <div style={{ width: 20, height: 20 }} />;

const M = () => <div style={{ width: 40, height: 40 }} />;

const L = () => <div style={{ width: 60, height: 60 }} />;

Gap.XS = XS;
Gap.S = S;
Gap.M = M;
Gap.L = L;

export default Gap;
