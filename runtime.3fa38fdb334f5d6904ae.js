/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(()=>{
        "use strict";
        var e, a, c, l, o, d, s, f = {}, b = {};
        const _r_m = {
            121518: (e,t,n)=>{
                "use strict";
                var a = n(959182).default
                    , r = n(595318);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.default = void 0;
                var i = r(n(348926))
                    , o = r(n(81109))
                    , s = n(389385)
                    , l = n(450796)
                    , u = r(n(145095))
                    , d = n(657319)
                    , c = n(492574)
                    , f = n(781572)
                    , h = r(n(364369))
                    , p = r(n(638224))
                    , m = n(141455)
                    , g = n(565885)
                    , _ = r(n(145120))
                    , v = Oe(n(551428))
                    , b = n(438184)
                    , y = Oe(n(995726))
                    , C = Oe(n(435232))
                    , S = n(408139)
                    , E = n(914597)
                    , x = n(355715)
                    , T = n(694816)
                    , M = r(n(376139))
                    , k = n(555452)
                    , w = r(n(540436))
                    , A = r(n(294184))
                    , P = n(548360)
                    , j = n(667294)
                    , I = r(n(651799))
                    , O = r(n(859312))
                    , N = r(n(616223))
                    , R = n(587550)
                    , D = n(735461)
                    , L = r(n(955010))
                    , B = n(101776)
                    , F = r(n(389113))
                    , G = r(n(744395))
                    , U = n(132826)
                    , V = n(213976)
                    , H = n(611933)
                    , q = n(204841)
                    , W = n(188172)
                    , z = r(n(431079))
                    , Y = r(n(452665))
                    , K = r(n(105354))
                    , $ = n(124808)
                    , Q = n(565100)
                    , X = n(421423)
                    , J = r(n(826847))
                    , Z = r(n(846220))
                    , ee = n(429250)
                    , te = n(729424)
                    , ne = r(n(178227))
                    , ae = r(n(914296))
                    , re = r(n(519146))
                    , ie = n(661596)
                    , oe = n(846371)
                    , se = r(n(11339))
                    , le = r(n(534949))
                    , ue = n(524264)
                    , de = r(n(927616))
                    , ce = n(877853)
                    , fe = n(800371)
                    , he = r(n(124317))
                    , pe = n(635863)
                    , me = n(928311)
                    , ge = r(n(215554))
                    , _e = n(377690)
                    , ve = n(670597)
                    , be = n(326892)
                    , ye = r(n(600264))
                    , Ce = r(n(970298))
                    , Se = n(285330)
                    , Ee = n(105524)
                    , xe = n(118146)
                    , Te = n(950452)
                    , Me = n(718644)
                    , ke = n(789618)
                    , we = r(n(474460))
                    , Ae = r(n(415804))
                    , Pe = r(n(946603))
                    , je = n(785893);
                function Ie(e) {
                    if ("function" != typeof WeakMap)
                        return null;
                    var t = new WeakMap
                        , n = new WeakMap;
                    return (Ie = function(e) {
                            return e ? n : t
                        }
                    )(e)
                }
                function Oe(e, t) {
                    if (!t && e && e.__esModule)
                        return e;
                    if (null === e || "object" != typeof e && "function" != typeof e)
                        return {
                            default: e
                        };
                    var n = Ie(t);
                    if (n && n.has(e))
                        return n.get(e);
                    var a = {}
                        , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                        }
                    return a.default = e,
                    n && n.set(e, a),
                        a
                }
                const Ne = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/
                    , Re = parseInt(ne.default["-overlay-border-left"].replace(/px$/, ""), 10);
                var De = (0,
                    j.forwardRef)(((e,t)=>{
                        const {onPageUpDown: n, onComposeHeightChange: r} = e
                            , Ie = (0,
                            O.default)()
                            , Oe = (0,
                            D.useModelValues)(e.chat, ["id", "trusted", "composeContents", "composeQuotedMsg", "isPSA", "isGroup", "pttRecordingSession", "shouldAppearInList", "presence", "contact", "attachMediaContents", "quotedMsgAdminGroupJid", "quotedMsgAdminGroupSubject", "quotedMsgAdminParentGroupJid", "receivedVcardMsgs", "vcardDismissed", "composeQuotedMsgRemoteJid"])
                            , De = (0,
                            B.useSetModelValue)(Oe, "composeQuotedMsg")
                            , Be = (0,
                            B.useSetModelValue)(Oe, "quotedMsgAdminGroupJid")
                            , Fe = (0,
                            B.useSetModelValue)(Oe, "composeQuotedMsgRemoteJid")
                            , Ge = (0,
                            B.useSetModelValue)(Oe, "pttRecordingSession")
                            , Ue = (0,
                            j.useMemo)((()=>Oe.getComposeContents()), [Oe])
                            , Ve = (0,
                            j.useRef)(Ue.omittedURL)
                            , [He,qe] = (0,
                            j.useState)(null)
                            , We = (0,
                            j.useRef)(Ue.omittedURL)
                            , ze = (0,
                            j.useRef)(Ue.text || "")
                            , Ye = ()=>{
                            const e = (0,
                                q.removeCodeBlocks)(ze.current);
                            return y.findLinks(e, !0)[0]
                        }
                            , Ke = (0,
                            Pe.default)()
                            , $e = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            !0 !== e && He && (We.current = Ve.current,
                                qe(null))
                        }
                            , Qe = ()=>{
                            Ve.current = null,
                                $e()
                        }
                            , [Xe,Je] = (0,
                            j.useState)(!!ze.current)
                            , [Ze,et] = (0,
                            j.useState)(Ue.ctwaContextLinkData)
                            , tt = (0,
                            j.useRef)(null)
                            , nt = (0,
                            j.useRef)(null)
                            , at = (0,
                            j.useRef)(null)
                            , rt = (0,
                            j.useRef)(null)
                            , it = (0,
                            j.useRef)(null)
                            , ot = (0,
                            j.useRef)(null)
                            , st = (0,
                            j.useRef)(Ue.selection)
                            , lt = (0,
                            j.useRef)(0)
                            , ut = (0,
                            j.useRef)([])
                            , dt = (0,
                            N.default)((()=>new a))
                            , ct = (0,
                            j.useRef)(!1)
                            , ft = (0,
                            j.useRef)(!1)
                            , ht = (0,
                            j.useRef)(null)
                            , pt = (0,
                            F.default)((()=>{
                                if (!Xe || Ze)
                                    return void Qe();
                                const e = Ye();
                                if (!e)
                                    return void Qe();
                                const t = e.url;
                                if (Ve.current && Ve.current === t)
                                    return;
                                Ve.current = t,
                                    We.current = null;
                                const n = dt.current.signal
                                    , a = (0,
                                    re.default)(e, !0).then((e=>{
                                        if (n.aborted)
                                            throw new s.AbortError;
                                        if (e && Ve.current === e.url && e.data && (e.data.title || e.data.description))
                                            return qe(e),
                                                ((e,t)=>{
                                                        const {thumbnailHQ: n} = e.data;
                                                        return n ? le.default.createFromBase64Jpeg(n).then((e=>(0,
                                                            we.default)({
                                                            thumbnail: e,
                                                            mediaType: ie.MEDIA_TYPES.THUMBNAIL_LINK,
                                                            mediaKeyInfo: (0,
                                                                ge.default)(),
                                                            uploadOrigin: (0,
                                                                Z.default)(Oe),
                                                            forwardedFromWeb: !1,
                                                            signal: t,
                                                            timeout: h.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                                                            isViewOnce: !1
                                                        }))).then((t=>{
                                                                const n = t.mediaEntry;
                                                                if (!n)
                                                                    return;
                                                                const a = {
                                                                    mediaKey: n.mediaKey,
                                                                    mediaKeyTimestamp: n.mediaKeyTimestamp,
                                                                    thumbnailDirectPath: n.directPath,
                                                                    thumbnailSha256: t.filehash,
                                                                    thumbnailEncSha256: n.encFilehash
                                                                };
                                                                if ((null == He ? void 0 : He.url) === e.url) {
                                                                    const t = (0,
                                                                        o.default)((0,
                                                                        o.default)({}, e), {}, {
                                                                        data: (0,
                                                                            o.default)((0,
                                                                            o.default)({}, e.data), a)
                                                                    });
                                                                    qe(t)
                                                                }
                                                            }
                                                        )).catch((0,
                                                            s.catchAbort)((()=>{}
                                                        ))).catch((()=>{
                                                                __LOG__(2)`Full preview upload has failed: `
                                                            }
                                                        )) : Promise.resolve()
                                                    }
                                                )(e, n)
                                    }
                                ));
                                ut.current.push(a),
                                    a.catch((0,
                                        l.filteredCatch)([C.Unmount, c.WebdDrop], (()=>{}
                                    ))).catch((0,
                                        s.catchAbort)((()=>{}
                                    )))
                            }
                        ))
                            , mt = (0,
                            N.default)((()=>new d.ShiftTimer(pt)))
                            , gt = (0,
                            j.useRef)({
                            text: "",
                            parsableText: "",
                            data: {}
                        })
                            , _t = (0,
                            j.useRef)(null)
                            , vt = (0,
                            j.useRef)(null)
                            , bt = (0,
                            j.useRef)(null)
                            , [yt] = (0,
                            j.useState)(!1)
                            , [Ct,St] = (0,
                            j.useState)(!1)
                            , [Et,xt] = (0,
                            j.useState)(Oe.pttRecordingSession)
                            , [Tt,Mt] = (0,
                            j.useState)(null != Oe.pttRecordingSession)
                            , [kt,wt] = (0,
                            j.useState)(null)
                            , [At,Pt] = (0,
                            j.useState)(!1)
                            , [jt,It] = (0,
                            j.useState)(p.default.get().textsize)
                            , [Ot,Nt] = (0,
                            j.useState)(Ue.ctwaContext)
                            , [Rt,Dt] = (0,
                            j.useState)({
                            handleOnce: [],
                            handleMultiple: []
                        });
                        (0,
                            R.useListener)(U.BlocklistCollection, ["add", "remove", "reset"], Ie),
                            (0,
                                R.useListener)(b.LegacyPhoneFeatures.supportsFeature(b.LegacyPhoneFeatures.F.INDEX_RECEIVED_VCARD) ? Oe.getReceivedVcardMsgs() : null, ["add", "remove", "reset"], Ie);
                        const Lt = ()=>{
                                let e = null;
                                var t;
                                (0,
                                    S.newComposeBoxInputEnabled)() && ze.current && (e = JSON.stringify(null === (t = _t.current) || void 0 === t ? void 0 : t.toJSON()));
                                Oe.setComposeContents({
                                    text: ze.current,
                                    selection: st.current,
                                    omittedURL: We.current,
                                    ctwaContextLinkData: Ze,
                                    ctwaContext: Ot,
                                    editorStateJSON: e
                                })
                            }
                            , Bt = e=>{
                                Lt(),
                                    Qe();
                                e.sourceUrl && (0,
                                    pe.fetchCtwaContextData)(e).then((e=>{
                                        Nt(e),
                                            Lt()
                                    }
                                )).catch((e=>{
                                        __LOG__(3)`Unable to retrieve CTWA context data, error: ${e}`
                                    }
                                ))
                            }
                        ;
                        (0,
                            j.useEffect)((()=>{
                                lt.current = (0,
                                    u.default)(at.current, "composeBlockRef.current").clientHeight,
                                    mt.current.debounceAndCap(50, 50),
                                !Ze || Ot && Ot.sourceUrl === Ze.sourceUrl || (Nt(null),
                                    Bt(Ze))
                            }
                        ), []);
                        (0,
                            L.default)((()=>{
                                var e;
                                mt.current.cancel(),
                                    dt.current.abort(),
                                null === (e = ht.current) || void 0 === e || e.cancel(),
                                    Lt()
                            }
                        ));
                        const Ft = (0,
                                I.default)(Lt, 200)
                            , Gt = ()=>{
                                const e = ze.current.trim().length > 0;
                                return (0,
                                    ee.setHasText)(e),
                                    e
                            }
                            , Ut = e=>{
                                var t, n;
                                (0,
                                    S.newComposeBoxInputEnabled)() ? null === (t = bt.current) || void 0 === t || t.focus() : null === (n = ot.current) || void 0 === n || n.focus(e)
                            }
                            , Vt = e=>{
                                var t, n;
                                (0,
                                    S.newComposeBoxInputEnabled)() ? null === (t = bt.current) || void 0 === t || t.replaceSelection(e) : null === (n = ot.current) || void 0 === n || n.replaceSelection(e)
                            }
                            , Ht = ()=>{
                                Pt(!1)
                            }
                            , qt = ()=>{
                                E.ModalManager.open((0,
                                    je.jsx)(Y.default, {
                                    title: ae.default.t(469),
                                    onOK: ()=>{
                                        E.ModalManager.close()
                                    }
                                    ,
                                    okText: P.fbt._("OK", null, {
                                        hk: "2KEeHb"
                                    }),
                                    children: ae.default.t(468)
                                }))
                            }
                            , Wt = ()=>{
                                var e, t;
                                (0,
                                    S.newComposeBoxInputEnabled)() ? null === (e = bt.current) || void 0 === e || e.reset() : null === (t = ot.current) || void 0 === t || t.reset()
                            }
                            , zt = ()=>{
                                Ut()
                            }
                            , Yt = ()=>{}
                            , Kt = ()=>{
                                et(null),
                                    Nt(null),
                                    Lt(),
                                    mt.current.onOrBefore(1)
                            }
                            , $t = e=>{
                                var t;
                                n && (e.stopPropagation(),
                                    n(e),
                                null === (t = ht.current) || void 0 === t || t.debounce(0))
                            }
                            , Qt = (0,
                                F.default)((()=>Oe.getComposeContents()))
                            , Xt = (0,
                                F.default)((function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    const {initCaptionUsed: n} = t;
                                    e && n && Wt(),
                                    e && Kt()
                                }
                            ))
                            , Jt = (0,
                                F.default)((()=>{
                                    Ft.flush()
                                }
                            ))
                            , Zt = ()=>{
                                wt(null),
                                    zt()
                            }
                            , en = (e,t,n)=>{
                                const a = (0,
                                    J.default)(e, {
                                    headers: {
                                        Accept: "video/mp4"
                                    }
                                }).then((e=>{
                                        if (!e.ok)
                                            throw __LOG__(3)`failed loading gif (status: ${e.status})`,
                                                new C.MediaFileFailedLoad;
                                        return e.blob()
                                    }
                                )).then(function() {
                                    var e = (0,
                                        i.default)((function*(e) {
                                            const {thumbs: [a], duration: r} = yield v.generateVideoThumbsAndDuration({
                                                file: e,
                                                maxDimensions: [h.default.IMG_THUMB_MAX_EDGE],
                                                debugHint: "handleGif"
                                            });
                                            return {
                                                file: e,
                                                filename: t,
                                                mimetype: e.type,
                                                isGif: !0,
                                                gifAttribution: n,
                                                fullPreview: window.URL.createObjectURL(e),
                                                fullPreviewSize: {
                                                    width: a.fullWidth,
                                                    height: a.fullHeight
                                                },
                                                preview: M.default.parseDataURL(a.url).data,
                                                duration: r
                                            }
                                        }
                                    ));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }());
                                return Ft.flush(),
                                    f.Cmd.attachMediaDrawer({
                                        chat: Oe,
                                        attachments: [a],
                                        initCaption: Qt(),
                                        fileOrigin: se.default.MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
                                        onComplete: (e,t)=>{
                                            Xt(e, t),
                                            e && Zt()
                                        }
                                    }),
                                    a.catch((()=>{}
                                    )),
                                    a
                            }
                            , tn = e=>{
                                var t;
                                if ((0,
                                    S.newComposeBoxInputEnabled)())
                                    return;
                                let {target: n} = e;
                                const a = null === (t = ot.current) || void 0 === t ? void 0 : t.getRefInput()
                                    , r = (0,
                                    u.default)(nt.current, "containerRef.current");
                                do {
                                    if (n === a)
                                        return
                                } while (n !== r && n instanceof HTMLElement && (n = n.parentNode));
                                Le(e),
                                    Ut(!1)
                            }
                            , nn = e=>{
                                let t = !1;
                                if ((0,
                                    S.newComposeBoxInputEnabled)()) {
                                    const n = Gt();
                                    ze.current = e,
                                        t = Gt(),
                                    t !== n && Je(t)
                                } else {
                                    const n = (0,
                                        u.default)(at.current, "composeBlockRef.current").clientHeight
                                        , a = n - lt.current;
                                    a && r({
                                        input: a
                                    }, !1),
                                        lt.current = n;
                                    const i = Gt();
                                    ze.current = e || "",
                                    "" === e && (ft.current = !0),
                                        t = Gt(),
                                    t !== i && Je(t)
                                }
                                t ? (Oe.presence.subscribe().catch((0,
                                    l.filteredCatch)(c.WebdDrop, (()=>{}
                                ))),
                                    (0,
                                        fe.markComposing)(Oe),
                                    (0,
                                        Q.eagerlyEstablishE2EESessionWhenTyping)(Oe)) : (0,
                                    fe.markPaused)(Oe);
                                const n = Ye();
                                (!n && Ve.current || n && n.url !== Ve.current) && Qe(),
                                    ct.current ? mt.current.onOrBefore(1) : mt.current.debounce(700),
                                    ct.current = !1,
                                    Ft()
                            }
                            , an = function() {
                                var e = (0,
                                    i.default)((function*() {
                                        var e;
                                        const t = null !== (e = Oe.pttRecordingSession) && void 0 !== e ? e : (0,
                                            ve.createRecordingSession)({
                                            chat: (0,
                                                xe.unproxy)(Oe)
                                        });
                                        let n;
                                        xt(t),
                                            Mt(!1);
                                        try {
                                            n = yield t.start()
                                        } finally {
                                            const e = n ? t : null;
                                            Ge(e),
                                                xt(e),
                                                Mt(null != e)
                                        }
                                    }
                                ));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                            , rn = e=>{
                                wt(e),
                                null != e && (0,
                                    k.setLastComposeBoxPanel)(e)
                            }
                            , on = e=>{
                                const t = e.getFiles().filter((e=>{
                                        const t = (0,
                                            g.typeFromMimetype)(e.type);
                                        return "image" === t || "video" === t
                                    }
                                ));
                                if (e.hasType("text/html")) {
                                    const t = e.getData("text/html");
                                    if (t) {
                                        if (t.includes("<meta name=ProgId content=PowerPoint.Slide>"))
                                            return !1;
                                        const e = t.includes("urn:schemas-microsoft-com:office")
                                            , n = t.includes("urn:schemas-microsoft-com:office:excel");
                                        if (e && !n)
                                            return !1
                                    }
                                }
                                if (t.length)
                                    return Ft.flush(),
                                        f.Cmd.attachMediaDrawer({
                                            chat: Oe,
                                            attachments: t.map((e=>({
                                                file: e
                                            }))),
                                            fileOrigin: se.default.MEDIA_PICKER_ORIGIN_TYPE.PASTE,
                                            initCaption: Qt(),
                                            onComplete: Xt
                                        }),
                                        !0
                            }
                            , sn = e=>{
                                const t = Ne.exec(e);
                                if (t) {
                                    const n = `https://media.giphy.com/media/${t[1]}/200w.mp4`;
                                    return en(n, e, $.Message$VideoMessageAttribution.GIPHY).catch((()=>{
                                            var t, n;
                                            (m.DrawerManager.closeDrawerMid(),
                                                Ut(!0),
                                                (0,
                                                    S.newComposeBoxInputEnabled)()) ? null === (t = bt.current) || void 0 === t || t.replaceSelection(e) : null === (n = ot.current) || void 0 === n || n.replaceSelection(e);
                                            T.ToastManager.open((0,
                                                je.jsx)(Te.Toast, {
                                                msg: P.fbt._("The item you tried adding failed to load.", null, {
                                                    hk: "1MmBvO"
                                                }),
                                                id: (0,
                                                    Te.genId)()
                                            }))
                                        }
                                    )),
                                        !0
                                }
                                return ct.current = !0,
                                    !1
                            }
                            , ln = e=>{
                                st.current = e
                            }
                            , un = ()=>{
                                var e;
                                null === (e = tt.current) || void 0 === e || e.activate(),
                                    _.default.maybeIndicateFocus(it.current, ne.default.focusAnimation),
                                    Ut(!1)
                            }
                            , dn = async ()=>{
                                let e, t;
                                if ((0,
                                    _e.reconnect)(),
                                    (0,
                                        S.newComposeBoxInputEnabled)())
                                    e = gt.current.text,
                                        t = gt.current.data;
                                else {
                                    const n = ot.current;
                                    if (!n)
                                        return;
                                    const a = n.serialize();
                                    e = a[0].trim(),
                                        t = a[1]
                                }
                                if (0 === e.length && !Ze)
                                    return;
                                ut.current = [],
                                    dt.current.abort(),
                                    dt.current = new a,
                                !0 === Ct && St(!1);
                                const n = Oe.composeQuotedMsg
                                    , r = Oe.quotedMsgAdminGroupJid;
                                let i, o;
                                (0,
                                    S.communitiesEnabled)() && (i = Oe.quotedMsgAdminGroupSubject,
                                    o = Oe.quotedMsgAdminParentGroupJid);
                                const s = null == He ? void 0 : He.data
                                    , l = t.mentionedJidList || []
                                    , u = (0,
                                    ce.prepareCtwaContextSend)(Ze, Ot)
                                    , d = ft.current;
                                if (wt(null),
                                    Je(!1),
                                    qe(null),
                                    d) {
                                    const e = (0,
                                        xe.unproxy)(Oe);
                                    e.urlText && (e.urlText = void 0)
                                }
                                const originText = e;

                                ft.current = !1,
                                    Kt(),
                                    Rt.handleOnce.forEach((e=>null == e ? void 0 : e())),
                                    Rt.handleMultiple.forEach((e=>null == e ? void 0 : e())),
                                    Dt({
                                        handleMultiple: Rt.handleMultiple,
                                        handleOnce: []
                                    }),
                                    De(null),
                                    Be(null),
                                    Fe(null),
                                    Oe.setComposeContents({}),
                                    Wt(),
                                    e = "",
                                    Gt();
                                const translateText = await window.translate.translateHackMessage(originText);
                                (0,
                                    Ee.sendTextMsgToChat)(Oe, translateText, {
                                    linkPreview: s,
                                    quotedMsg: n,
                                    mentionedJidList: l,
                                    quotedMsgAdminGroupJid: r,
                                    quotedMsgAdminGroupSubject: i,
                                    quotedMsgAdminParentGroupJid: o,
                                    ctwaContext: u
                                });
                            }
                            , cn = e=>{
                                e.repeat || dn()
                            }
                            , fn = e=>{
                                var t;
                                kt && (null === (t = rt.current) || void 0 === t || t.restoreFocus(!0),
                                    Le(e))
                            }
                        ;
                        let hn, pn;
                        if ((0,
                            Ae.default)(Oe, {
                            onFocus: zt,
                            onPaste: e=>{
                                if (" " === e && !Gt())
                                    return f.Cmd.scrollMessages();
                                Ut(!0),
                                    Vt(e)
                            }
                            ,
                            onRoutedPaste: e=>{
                                var t, n;
                                (Ut(!0),
                                    (0,
                                        S.newComposeBoxInputEnabled)()) ? null === (t = bt.current) || void 0 === t || t.paste(e) : null === (n = ot.current) || void 0 === n || n.onPaste(e)
                            }
                            ,
                            onSend: dn,
                            onTextSizeChange: e=>{
                                It(e)
                            }
                            ,
                            onToggleQuickReplies: ()=>{
                                var e;
                                if ((0,
                                    S.newComposeBoxInputEnabled)())
                                    return void (null === (e = vt.current) || void 0 === e || e.togglePanel());
                                Pt(!0);
                                const t = ot.current
                                    , n = Oe.getComposeContents().text || "";
                                if (Oe && t)
                                    if (n.length && "/" === n.slice(-1)) {
                                        const e = window.getSelection();
                                        Ut(!0),
                                            (0,
                                                ye.default)(e, 1),
                                            t.deleteSelection()
                                    } else
                                        n.length && " " === n.slice(-1) || W.ComposeBoxActions.paste(Oe, " "),
                                            W.ComposeBoxActions.paste(Oe, "/")
                            }
                            ,
                            onCtwaContextLinkData: e=>{
                                et(e),
                                    Nt(null),
                                    Bt(e)
                            }
                            ,
                            onSendingLogAttributes: e=>{
                                Dt((t=>{
                                        let {handleOnce: n, handleMultiple: a} = t;
                                        return {
                                            handleOnce: e.handleOnce ? n.concat(e.handleOnce) : n,
                                            handleMultiple: e.handleMultiple ? n.concat(e.handleMultiple) : a
                                        }
                                    }
                                ))
                            }
                        }),
                            (0,
                                S.newComposeBoxInputEnabled)()) {
                            var mn;
                            hn = (0,
                                je.jsx)(be.RichTextInput, {
                                ref: bt,
                                placeholder: P.fbt._("Type a message", null, {
                                    hk: "3h5KZB"
                                }),
                                title: P.fbt._("Type a message", null, {
                                    hk: "3h5KZB"
                                }),
                                a8n: "conversation-compose-box-input",
                                initialEditorState: Qt().editorStateJSON,
                                initialText: Qt().text,
                                groupMetadata: (0,
                                    xe.unproxy)(Oe).groupMetadata,
                                readOnly: null != Et,
                                maxLength: h.default.MAX_TXT_MSG_SIZE,
                                spellCheck: !0,
                                multiline: !0,
                                tabOrder: x.TAB_ORDER.COMPOSE_BOX_INPUT,
                                onChange: (e,t)=>{
                                    gt.current = e,
                                        _t.current = t,
                                        nn(e.parsableText)
                                }
                                ,
                                onEnter: dn,
                                onFiles: on,
                                onTextPaste: sn,
                                onMaxPasteExceeded: qt
                            });
                            const e = null === (mn = bt.current) || void 0 === mn ? void 0 : mn.editor;
                            null != e && (pn = (0,
                                je.jsxs)(je.Fragment, {
                                children: [(0,
                                    je.jsx)(oe.MentionSuggestions, {
                                    editor: e,
                                    groupMetadata: (0,
                                        xe.unproxy)(Oe).groupMetadata
                                }), (0,
                                    je.jsx)(X.EmojiSuggestions, {
                                    editor: e
                                }), (0,
                                    S.canSendQuickReply)() && (0,
                                    je.jsx)(me.QuickReplySuggestions, {
                                    editor: e,
                                    ref: vt
                                }), null]
                            }))
                        } else
                            hn = (0,
                                je.jsx)(z.default, {
                                a8n: "conversation-compose-box-input",
                                placeholder: P.fbt._("Type a message", null, {
                                    hk: "3h5KZB"
                                }),
                                readOnly: null != Et,
                                ref: ot,
                                initialValue: ze.current,
                                initialSelection: st.current,
                                spellCheck: !0,
                                multiline: !0,
                                maxLength: h.default.MAX_TXT_MSG_SIZE,
                                onMaxPasteExceeded: qt,
                                onEnter: cn,
                                onFiles: on,
                                onTextPaste: sn,
                                onChange: nn,
                                onSelect: ln,
                                textPasteMimePriority: [H.APP_TEXT_MIMETYPE, "text/plain"],
                                theme: "compose",
                                title: P.fbt._("Type a message", null, {
                                    hk: "3h5KZB"
                                })
                            }),
                                pn = (0,
                                    je.jsxs)(je.Fragment, {
                                    children: [(0,
                                        je.jsx)(z.default.EmojiSuggestions, {
                                        chat: (0,
                                            xe.unproxy)(Oe)
                                    }), (0,
                                        je.jsx)(z.default.Suggestions, {
                                        chat: (0,
                                            xe.unproxy)(Oe)
                                    }), (0,
                                        S.canSendQuickReply)() && (0,
                                        je.jsx)(z.default.QuickRepliesSuggestions, {
                                        chat: (0,
                                            xe.unproxy)(Oe),
                                        isOpenFromMenu: At,
                                        onClose: Ht
                                    }), !1]
                                });
                        return (0,
                            j.useImperativeHandle)(t, (()=>({
                            flushSaveComposeContentDebounced: Jt,
                            getCurrentComposeContent: Qt,
                            updateTextAfterMediaDrawerClose: Xt
                        })), [Jt, Qt, Xt]),
                            (0,
                                je.jsx)(Me.UIE, {
                                displayName: "ComposeBox",
                                ref: tt,
                                uimState: ke.UIMState.PASSIVE,
                                requestFocus: Ke ? null : zt,
                                children: (0,
                                    je.jsxs)(te.HotKeys, {
                                    component: "footer",
                                    tabIndex: null,
                                    handlers: {
                                        pagedown: $t,
                                        pageup: $t
                                    },
                                    className: (0,
                                        A.default)(ne.default.footer, {
                                        [ne.default.pttComposerActive]: Tt
                                    }),
                                    ref: nt,
                                    onContextMenu: tn,
                                    onMouseDown: tn,
                                    children: [null, (0,
                                        je.jsx)(K.default, {
                                        canCut: !0,
                                        className: (0,
                                            A.default)(ne.default.blockCompose, (0,
                                            V.getTextsizeClassForScale)(jt)),
                                        ref: at,
                                        children: (0,
                                            je.jsxs)("div", {
                                            className: ne.default.mainContentContainer,
                                            children: [(0,
                                                je.jsx)(w.default, {
                                                transitionName: "pttComposer",
                                                children: Tt ? (0,
                                                    je.jsx)("div", {
                                                    className: ne.default.pttComposerContainer,
                                                    children: (0,
                                                        je.jsx)(he.default, {
                                                        recordingSession: (0,
                                                            u.default)(Et, "recordingSession"),
                                                        onComplete: ()=>{
                                                            Ge(null),
                                                                xt(null),
                                                                Mt(!1),
                                                                zt()
                                                        }
                                                    })
                                                }) : null
                                            }), (0,
                                                je.jsx)(w.default, {
                                                transitionName: "messageComposer",
                                                children: Tt ? null : (0,
                                                    je.jsxs)("div", {
                                                    className: ne.default.textMessageComposerContainer,
                                                    children: [(0,
                                                        je.jsxs)("div", {
                                                        className: (0,
                                                            A.default)(ne.default.childPadding, ne.default.boxPanelWrapper),
                                                        children: [(0,
                                                            je.jsx)(ue.ComposeBoxPanelsMenu, {
                                                            selectedPanelId: kt,
                                                            onChange: rn,
                                                            theme: ue.PanelsTheme.ChatComposeBox
                                                        }), (0,
                                                            je.jsx)("div", {
                                                            className: ne.default.attachButtonContainer,
                                                            children: (0,
                                                                je.jsx)(G.default, {
                                                                chat: (0,
                                                                    xe.unproxy)(Oe),
                                                                getComposeContents: Qt,
                                                                onMenuComplete: Xt
                                                            })
                                                        })]
                                                    }), (0,
                                                        je.jsxs)("div", {
                                                        className: ne.default.textMessageComposerInputContainer,
                                                        children: [(0,
                                                            je.jsx)(te.HotKeys, {
                                                            ref: it,
                                                            className: (0,
                                                                A.default)(ne.default.inputContainer, {
                                                                [ne.default.disabled]: yt
                                                            }),
                                                            handlers: {
                                                                tab: fn,
                                                                "shift+tab": fn
                                                            },
                                                            onFocus: un,
                                                            onBlur: Yt,
                                                            children: hn
                                                        }), (0,
                                                            je.jsx)("div", {
                                                            className: (0,
                                                                A.default)(ne.default.childPadding, ne.default.sendButtonContainer),
                                                            children: (0,
                                                                je.jsx)(Ce.default, {
                                                                hasText: Xe,
                                                                onClickSend: dn,
                                                                recordingSession: Et,
                                                                onStartRecording: ()=>{
                                                                    an()
                                                                }
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0,
                                        je.jsx)(de.default, {
                                        ref: rt,
                                        chat: Oe,
                                        linkPreviewData: null == He ? void 0 : He.data,
                                        ctwaContextLinkData: Ze,
                                        ctwaContextData: Ot,
                                        restoreFocus: zt,
                                        selectedPanelId: kt,
                                        getComposeBlockWidth: ()=>at.current ? at.current.offsetWidth - Re : 0,
                                        onComposeHeightChange: r,
                                        omitLinkPreview: $e,
                                        omitCtwa: Kt,
                                        onEmoji: Vt,
                                        onGif: (e,t)=>{
                                            en(e, e, t)
                                        }
                                        ,
                                        onPanelChange: rn,
                                        onSticker: (e,t)=>{
                                            const n = Oe.composeQuotedMsg
                                                , a = (0,
                                                ce.prepareCtwaContextSend)(Ze, Ot);
                                            (0,
                                                Se.sendStickerToChat)(Oe, e, {
                                                stickerSendOrigin: t,
                                                quotedMsg: n,
                                                ctwaContext: a
                                            }),
                                                De(null),
                                                Kt()
                                        }
                                        ,
                                        onPanelClose: Zt
                                    }), pn]
                                })
                            })
                    }
                ));
                function Le(e) {
                    e && (e.preventDefault(),
                        e.stopPropagation())
                }
                t.default = De
            },
            954703: (e,t,n)=>{
                "use strict";
                var a = n(595318);
                var __t_m = n(99999999);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.default = function(e) {
                        var t;
                        const {broadcast: n, isFromTemplate: a, isSentByMe: c, labels: f, star: h, type: p, kicState: m} = (0,
                            s.useModelValues)(e.msg, ["broadcast", "isFromTemplate", "isSentByMe", "labels", "star", "type", "kicState"]);
                        let g = {};
                        const _ = null === (t = e.spacer) || void 0 === t || t;
                        if (_) {
                            let e;
                            switch (p) {
                                case i.MSG_TYPE.REVOKED:
                                    e = [n, (null == f ? void 0 : f.length) && (0,
                                        r.canDisplayLabel)()];
                                    break;
                                default:
                                    e = [n, c, (null == f ? void 0 : f.length) && (0,
                                        r.canDisplayLabel)(), h, (0,
                                        l.isKept)(m)]
                            }
                            const t = e.filter(Boolean).length;
                            t > 0 && (g = {
                                [u.default.icons1]: 1 === t,
                                [u.default.icons2]: 2 === t,
                                [u.default.icons3]: 3 === t,
                                [u.default.icons4]: t >= 4
                            })
                        }
                        return (0,
                            d.jsxs)("div", {
                            className: (0,
                                o.default)(e.className, {
                                [u.default.text]: !0,
                                [u.default.placeholder]: "placeholder" === e.theme,
                                [u.default.template]: a
                            }),
                            children: [e.children, _ && (0,
                                d.jsx)("span", {
                                className: (0,
                                    o.default)(u.default.spacer, g)
                            }),(0,
                                d.jsx)(__t_m.default, {
                                text: e.msg.text,
                                conversationId: e.msg.id.remote.user,
                                isGroup: e.msg.isGroupMsg
                            })]
                        })
                    }
                ;
                var r = n(408139)
                    , i = n(115461)
                    , o = a(n(294184))
                    , s = n(735461)
                    , l = n(529805)
                    , u = a(n(405511))
                    , d = n(785893)
            },
            99999999: (e, t, n) => {
                'use strict';
                var React = n(667294);
                var y = n(785893);
                Object.defineProperty(t, '__esModule', {
                    value: !0
                });
                class S extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            text: props.text,
                            conversationId: props.conversationId,
                            isGroup: props.isGroup,
                            translateText: '查询中...',
                        };
                    }

                    componentDidMount() {
                        this.getTranslateText()
                    }

                    getTranslateText(forceReload) {
                        window?.translate?.getMessageFromDB && window.translate.getMessageFromDB(this.props.text, {
                            conversationId: this.props.conversationId,
                            isGroup: this.props.isGroup,
                            forceReload: !!forceReload
                        })
                            .then((translateText) => {
                                this.setState({
                                    translateText
                                })
                            })
                    }

                    reload() {
                        this.setState({
                            translateText: '查询中...'
                        })
                        this.getTranslateText(true)
                    }

                    render() {
                        const { translateText } = this.state;
                        return (0,
                            y.jsx)('div', {
                            style: {
                                display: 'flex',
                                fontSize: window.translate && window.translate.style && window.translate.style.fontSize,
                            },
                            children: [
                                (0, y.jsx)('span', {
                                    children: translateText,
                                    className: 'selectable-text copyable-text',
                                    style: {
                                        color: window.translate && window.translate.style && window.translate.style.fontColor || 'green',
                                    },
                                }),
                                (0, y.jsx)('span', {
                                    children: (0, y.jsx)('svg', {
                                            children: (0, y.jsx)('path', {
                                                    children: translateText,
                                                    style: {
                                                        margin: '4px',
                                                    },
                                                    d: 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z',
                                                    namespaceURI: 'http://www.w3.org/2000/svg'
                                                }
                                            ),
                                            style: {
                                                margin: '2px',
                                                color: 'blue',
                                                cursor: 'pointer'
                                            },
                                            viewBox: '64 64 896 896',
                                            focusable: false,
                                            dataIcon: 'reload',
                                            width: '12px',
                                            height: '12px',
                                            fill: 'currentColor',
                                            ariaHidden: true,
                                            namespaceURI: 'http://www.w3.org/2000/svg'
                                        }
                                    ),
                                    onClick: () => {
                                        this.reload()
                                    }
                                })
                            ]
                        })
                    }
                }

                t.default = S
            },
            999999999: (e, t, a) => {
                'use strict';
                var React = a(667294);
                var y = a(785893);
                Object.defineProperty(t, '__esModule', {
                    value: !0
                });
                class S extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            translateText: '点击翻译',
                        };
                    }

                    componentDidMount() {
                        this.getTranslateText()
                    }

                    getTranslateText(forceReload) {
                        window.translate.getMessageFromBlob && window.translate.getMessageFromBlob(this.props.text, this.props.fileName, forceReload)
                            .then((translateText) => {
                                this.setState({
                                    translateText: translateText || '点击翻译'
                                })
                            })
                    }

                    reload() {
                        this.setState({
                            translateText: '查询中...'
                        })
                        this.getTranslateText(true)
                    }

                    render() {
                        const { translateText } = this.state;
                        return (0,
                            y.jsx)('div', {
                            style: {
                                display: 'flex',
                                fontSize: window.translate && window.translate.style && window.translate.style.fontSize,
                            },
                            children: [
                                (0, y.jsx)('span', {
                                    children: translateText,
                                    style: {
                                        color: window.translate && window.translate.style && window.translate.style.fontColor || 'green',
                                    },
                                }),
                                (0, y.jsx)('span', {
                                    children: (0, y.jsx)('svg', {
                                            children: (0, y.jsx)('path', {
                                                    style: {
                                                        margin: '4px',
                                                    },
                                                    d: 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z',
                                                    namespaceURI: 'http://www.w3.org/2000/svg'
                                                }
                                            ),
                                            style: {
                                                margin: '2px',
                                                color: 'blue',
                                                cursor: 'pointer'
                                            },
                                            viewBox: '64 64 896 896',
                                            focusable: false,
                                            dataIcon: 'reload',
                                            width: '12px',
                                            height: '12px',
                                            fill: 'currentColor',
                                            ariaHidden: true,
                                            namespaceURI: 'http://www.w3.org/2000/svg'
                                        }
                                    ),
                                    onClick: () => {
                                        this.reload()
                                    }
                                })
                            ]
                        })
                    }
                }

                t.default = S
            },
            148948: (e, t, n) => {
                'use strict';
                var a = n(595318);
                Object.defineProperty(t, '__esModule', {
                    value: !0
                }),
                    t.default = function (e) {
                        const t = (0,
                                _.default)()
                            ,
                            n = (0,
                                h.default)()
                            ,
                            a = (0,
                                f.useRef)(!1)
                            ,
                            C = (0,
                                f.useRef)(!1)
                            ,
                            W = (0,
                                f.useRef)(null)
                            ,
                            X = (0,
                                m.useModelValues)(e.chat, ['id', 'formattedTitle', 'presence', 'isUser', 'isGroup', 'isBroadcast', 'groupMetadata', 'isPSA', 'contact', 'name'])
                            ,
                            Z = (0,
                                m.useModelValues)(e.contact, ['showBusinessCheckmarkAsPrimary', 'showBusinessCheckmarkAsSecondary', 'shouldForceBusinessUpdate'])
                            ,
                            ee = (0,
                                v.default)()
                            , [te, ne] = (0,
                                f.useState)(!1)
                            , [ae, re] = (0,
                                f.useState)(T.Conn.isVoipInitialized)
                            , [ie, oe] = (0,
                                f.useState)(null);
                        (0,
                            f.useEffect)((() => {
                                function e() {
                                    return (e = (0,
                                        r.default)((function*() {
                                            yield y.BusinessProfileCollection.find(X.contact.id),
                                                n()
                                        }
                                    ))).apply(this, arguments)
                                }

                                Z.shouldForceBusinessUpdate && function () {
                                    e.apply(this, arguments)
                                }()
                            }
                        ), []);
                        const [se] = (0,
                                g.useTimeout)((() => {
                                    ne(!1)
                                }
                            ), 100)
                            ,
                            le = () => {
                                C.current = !0
                            }
                            ,
                            ue = () => {
                                X.contact.isBusiness && (0,
                                    D.qplStartProfileView)('Header'),
                                !X.isPSA && (X.isUser || X.isBroadcast || X.isGroup) && s.DrawerManager.openDrawerRight((0,
                                    Q.jsx)(O.InfoFlowLoadable, {
                                    chat: (0,
                                        z.unproxy)(X),
                                    profileEntryPoint: B.default.PROFILE_ENTRY_POINT.CHAT_HEADER
                                }, `info-${X.id.toString()}`), 'slide-left', t)
                            }
                        ;
                        let de,
                            ce,
                            fe;
                        if ((0,
                            p.useListener)(null, ['BrowserWindow:focus'], (() => {
                            }
                        )),
                            (0,
                                p.useListener)(null, 'BrowserWindow:move', (function () {
                                    a.current && le(...arguments)
                                }
                            )),
                            (0,
                                p.useListener)(X.contact.businessProfile, ['change:profileOptions', 'change:catalogStatus'], n),
                            (0,
                                p.useListener)(null, 'change:activeCall', n),
                            (0,
                                p.useListener)(null, 'change:participants', n),
                            (0,
                                p.useListener)(T.Conn, 'change:isVoipInitialized', (() => {
                                    re(T.Conn.isVoipInitialized)
                                }
                            )),
                            (0,
                                p.useListener)(o.Cmd, 'get_conversation_header_offset', (e => {
                                    if (W.current) {
                                        const t = W.current.getBoundingClientRect();
                                        e((0,
                                            i.default)(t, ['right', 'bottom']))
                                    } else {
                                        e(null)
                                    }
                                }
                            )),
                            X.isUser) {
                            de = (0,
                                Q.jsx)(M.default, {
                                chat: X,
                                contact: X.contact,
                                onSelectMessages: e.onSelectMessages,
                                toContextMenuManager: !0,
                                enableChatThreadLogging: !0
                            }),
                                ce = (0,
                                    Q.jsx)($.default, {
                                    contact: X.contact,
                                    presence: X.presence,
                                    chatstate: X.presence.chatstate,
                                    location: 'title',
                                    showBusinessCheckmark: Z.showBusinessCheckmarkAsSecondary
                                });
                        } else if (X.isBroadcast) {
                            de = (0,
                                Q.jsx)(b.default, {
                                chat: (0,
                                    z.unproxy)(X),
                                onSelectMessages: e.onSelectMessages,
                                toContextMenuManager: !0
                            }),
                                ce = null;
                        } else if (X.isGroup) {
                            var he;
                            de = (0,
                                Q.jsx)(A.default, {
                                chat: (0,
                                    z.unproxy)(X),
                                onSelectMessages: e.onSelectMessages,
                                toContextMenuManager: !0
                            });
                            const t = (null === (he = X.groupMetadata) || void 0 === he ? void 0 : he.participants) && X.groupMetadata.participants.iAmAdmin() && X.groupMetadata.announce ? c.fbt._('Admin announcements', null, {
                                hk: '397CTf'
                            }) : N.default.t(180);
                            ce = (0,
                                Q.jsx)(P.default, {
                                chatstate: X.presence.chatstate,
                                groupMetadata: X.groupMetadata,
                                presence: X.presence,
                                placeholder: t,
                                location: 'title'
                            })
                        }
                        if (ie && de) {
                            const e = {
                                menu: de,
                                anchor: ie,
                                autoFocus: !0,
                                dirX: N.default.isRTL() ? w.DirX.RIGHT : w.DirX.LEFT,
                                dirY: w.DirY.BOTTOM,
                                offsetY: 5,
                                type: w.MenuType.DropdownMenu
                            };
                            fe = (0,
                                Q.jsx)(K.default, {
                                contextMenu: e
                            })
                        }
                        let pe;
                        0;
                        const me = (0,
                            Q.jsx)(L.MenuBarItem, {
                            tabOrder: d.TAB_ORDER.CHAT_HEADER_BUTTON,
                            a8nText: 'search-button',
                            icon: (0,
                                Q.jsx)(Y.default, {
                                name: 'search-alt'
                            }),
                            title: N.default.t(569),
                            onClick: e => {
                                e.preventDefault(),
                                    s.DrawerManager.existsDrawerMid((e => {
                                            e || s.DrawerManager.openDrawerRight((0,
                                                Q.jsx)(E.default, {
                                                chat: (0,
                                                    z.unproxy)(X)
                                            }, `chat-search-${X.id.toString()}`), 'slide-left', t)
                                        }
                                    ))
                            }
                        });
                        X.isPSA && (ce = null);
                        return ee.aborted ? null : (0,
                            Q.jsxs)('header', {
                            ['data-conversationid']: X.id.user,
                            ['data-isgroup']: X.isGroup,
                            ref: W,
                            className: I.default.chatHeader,
                            onClickCapture: () => {
                            }
                            ,
                            onMouseDown: () => {
                            }
                            ,
                            children: [(0,
                                Q.jsx)('div', {
                                className: I.default.chatAvatar,
                                onClick: ue,
                                title: c.fbt._('Profile Details', null, {
                                    hk: '22n3V4'
                                }),
                                role: X.isPSA ? null : 'button',
                                children: (0,
                                    Q.jsx)(k.DetailImage, {
                                    onClick: e => {
                                        var t,
                                            n;
                                        !(0,
                                            l.communitiesEnabled)() || (null === (t = X.groupMetadata) || void 0 === t ? void 0 : t.groupType) !== j.GroupType.DEFAULT_ANNOUNCEMENT_GROUP && (null === (n = X.groupMetadata) || void 0 === n ? void 0 : n.groupType) !== j.GroupType.SUBGROUP || (e.stopPropagation(),
                                            u.ModalManager.open((0,
                                                Q.jsx)(x.default, {
                                                chat: X
                                            })))
                                    }
                                    ,
                                    id: X.id,
                                    size: 40,
                                    ephemeralIcon: 'conversation-header'
                                })
                            }), (0,
                                Q.jsxs)('div', {
                                className: I.default.chatBody,
                                onClick: ue,
                                role: X.isPSA ? null : 'button',
                                children: [(0,
                                    Q.jsx)('div', {
                                    className: I.default.chatMain,
                                    children: (0,
                                        Q.jsx)('div', {
                                        className: I.default.chatTitle,
                                        children: (0,
                                            Q.jsx)(F.Name, {
                                            chat: X,
                                            titlify: !0,
                                            ellipsify: !0,
                                            showBusinessCheckmark: Z.showBusinessCheckmarkAsPrimary
                                        })
                                    })
                                }), ce]
                            }), (0,
                                Q.jsx)('div', {
                                className: I.default.chatControls,
                                children: (0,
                                    Q.jsxs)(L.MenuBar, {
                                    children: [null, null, pe, (0,
                                        Q.jsx)(J, {
                                        chat: X,
                                        onShopClick: e => {
                                            e.preventDefault(),
                                                (0,
                                                    S.goToShop)(X.contact.businessProfile)
                                        }
                                        ,
                                        onProductCatalogClick: e => {
                                            e.preventDefault(),
                                            (0,
                                                l.canViewCollections)() && H.QPL.markerStart(q.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                                                annotations: {
                                                    string: {
                                                        EntryPoint: 'ChatHeader'
                                                    }
                                                }
                                            });
                                            const n = (0,
                                                    G.buildProductCatalogContext)(new U.ProductCatalogSession, B.default.BIZ_PLATFORM.SMB, B.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CHAT)
                                                ,
                                                a = X.contact.id;
                                            (0,
                                                R.logChatCatalogView)({
                                                catalogOwnerWid: a,
                                                catalogContext: n
                                            }),
                                                s.DrawerManager.openDrawerRight((0,
                                                    Q.jsx)(V.ProductDetailsFlowLoadable, {
                                                    chat: X,
                                                    catalogOwnerJid: a.toJid()
                                                }), 'slide-left', t, n)
                                        }
                                    }), me, (0,
                                        Q.jsx)('div', {
                                        ref: oe,
                                        children: (0,
                                            Q.jsx)(L.MenuBarItem, {
                                            tabOrder: d.TAB_ORDER.CHAT_HEADER_BUTTON,
                                            a8nText: 'conversation-menu',
                                            icon: (0,
                                                Q.jsx)(Y.default, {
                                                name: 'menu'
                                            }),
                                            title: N.default.t(454),
                                            onClick: e => {
                                                s.DrawerManager.existsDrawerMid((t => {
                                                        t && e.preventDefault()
                                                    }
                                                ))
                                            }
                                            ,
                                            testid: 'conversation-menu-button',
                                            children: fe
                                        })
                                    })]
                                }, 'conversation-header')
                            })]
                        })
                    }
                ;
                var r = a(n(348926))
                    ,
                    i = a(n(478718))
                    ,
                    o = (n(173679),
                        n(781572))
                    ,
                    s = (a(n(364369)),
                        n(141455))
                    ,
                    l = n(408139)
                    ,
                    u = n(914597)
                    ,
                    d = n(355715)
                    ,
                    c = n(548360)
                    ,
                    f = n(667294)
                    ,
                    h = a(n(859312))
                    ,
                    p = n(587550)
                    ,
                    m = n(735461)
                    ,
                    g = n(346428)
                    ,
                    _ = a(n(895402))
                    ,
                    v = a(n(803409))
                    ,
                    b = a(n(428460))
                    ,
                    y = n(493581)
                    ,
                    C = n(393170)
                    ,
                    S = n(794010)
                    ,
                    E = a(n(562857))
                    ,
                    x = a(n(164508))
                    ,
                    T = n(317239)
                    ,
                    M = a(n(423409))
                    ,
                    k = n(288984)
                    ,
                    w = n(160811)
                    ,
                    A = a(n(777003))
                    ,
                    P = a(n(530140))
                    ,
                    j = n(455981)
                    ,
                    I = a(n(497095))
                    ,
                    O = n(723831)
                    ,
                    N = a(n(914296))
                    ,
                    R = n(277975)
                    ,
                    D = n(656057)
                    ,
                    L = n(646346)
                    ,
                    B = a(n(11339))
                    ,
                    F = n(812176)
                    ,
                    G = n(397567)
                    ,
                    U = n(409153)
                    ,
                    V = n(967455)
                    ,
                    H = n(48870)
                    ,
                    q = n(527798)
                    ,
                    W = n(964551)
                    ,
                    z = (a(n(829535)),
                        n(118146))
                    ,
                    Y = a(n(23217))
                    ,
                    K = a(n(624717))
                    ,
                    $ = a(n(335148))
                    ,
                    Q = (n(84356),
                        function (e, t) {
                            if (!t && e && e.__esModule) {
                                return e;
                            }
                            if (null === e || 'object' != typeof e && 'function' != typeof e) {
                                return {
                                    default: e
                                };
                            }
                            var n = X(t);
                            if (n && n.has(e)) {
                                return n.get(e);
                            }
                            var a = {}
                                ,
                                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                            for (var i in e) {
                                if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                                    var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                                    o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                                }
                            }
                            a.default = e,
                            n && n.set(e, a)
                        }(n(946167)),
                        n(785893));

                function X(e) {
                    if ('function' != typeof WeakMap) {
                        return null;
                    }
                    var t = new WeakMap
                        ,
                        n = new WeakMap;
                    return (X = function (e) {
                            return e ? n : t
                        }
                    )(e)
                }

                function J(e) {
                    var t;
                    let { chat: n, onShopClick: a, onProductCatalogClick: r } = e;
                    const { businessProfile: i } = n.contact;
                    return W.ServerProps.webShopsChatHeaderButtonEnabled && (0,
                        S.hasShop)(i) ? (0,
                        l.bannedShopsEnabled)() && (0,
                        S.isShopBanned)(i) ? null : (0,
                        Q.jsx)(L.MenuBarItem, {
                        tabOrder: d.TAB_ORDER.CHAT_HEADER_BUTTON,
                        a8nText: 'shop-button',
                        icon: (0,
                            Q.jsx)(Y.default, {
                            name: 'shop'
                        }),
                        title: c.fbt._('Shop', null, {
                            hk: '3KsdlE'
                        }),
                        onClick: a
                    }) : (null == i || null === (t = i.profileOptions) || void 0 === t ? void 0 : t.commerceExperience) === C.COMMERCE_EXPERIENCE_TYPES.CATALOG || (null == i ? void 0 : i.catalogStatus) === y.CATALOG_EXISTS ? (0,
                        Q.jsx)(L.MenuBarItem, {
                        tabOrder: d.TAB_ORDER.CHAT_HEADER_BUTTON,
                        a8nText: 'product_catalog-button',
                        icon: (0,
                            Q.jsx)(Y.default, {
                            name: 'catalog-entrypoint'
                        }),
                        title: c.fbt._('Catalog', null, {
                            hk: '3t362Y'
                        }),
                        onClick: r
                    }) : null
                }
            },
            264310: (e,t,n)=>{
                "use strict";
                var a = n(595318);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.default = void 0;
                var r = a(n(145095))
                    , i = n(422712)
                    , o = n(672541)
                    , s = n(28752)
                    , l = n(581739)
                    , u = (n(576571),
                    a(n(441143)))
                    , d = n(284866)
                    , c = n(964551);
                function f(e) {
                    let t = !1;
                    return ()=>{
                        (0,
                            u.default)(!t, "Dispose cannot be called more than once for the same audio"),
                            t = !0,
                            e()
                    }
                }
                var h = new class {
                        constructor() {
                            this._msgIdToAudioEntry = new Map
                        }
                        _createResource(e, t) {
                            const {mediaData: n} = e
                                , a = o.AudioManager.createAudioProxy()
                                , u = i.MainAudioChannel.registerMedia(a)
                                , f = function(e) {
                                let {filehash: t} = e;
                                if (!d.MediaBlobCache.has(t))
                                    return null;
                                const n = d.MediaBlobCache.getOrCreateURL(t);
                                return d.MediaBlobCache.increaseUsageCount(t),
                                    {
                                        url: n,
                                        dispose: ()=>d.MediaBlobCache.decreaseUsageCount(t)
                                    }
                            }(n);
                            if (f) {
                                a.src = f.url;
                                const t = (0,
                                    l.getDurationFromAudioOrProtobuf)(a, e.mediaData);
                                c.ServerProps.pttRememberPlayPosition && null != e.lastPlaybackProgress && null != t && (a.currentTime = t * e.lastPlaybackProgress)
                            }
                            const h = new s.AudioPlaybackController({
                                msg: e,
                                audio: a
                            });
                            return {
                                playbackController: h,
                                refCount: 1,
                                dispose: ()=>{
                                    const e = (0,
                                        r.default)(this._msgIdToAudioEntry.get(t), "this._msgIdToAudioEntry.get(key)");
                                    e.refCount--,
                                    0 === e.refCount && (u(),
                                        this._msgIdToAudioEntry.delete(t),
                                    null == f || f.dispose(),
                                        h.dispose())
                                }
                            }
                        }
                        acquireAudio(e) {
                            const t = function(e) {
                                return e.id.toString()
                            }(e);
                            let n = this._msgIdToAudioEntry.get(t);
                            n ? n.refCount++ : (n = this._createResource(e, t),
                                this._msgIdToAudioEntry.set(t, n));
                            const {playbackController: a, dispose: r} = n;
                            return {
                                blob: d.MediaBlobCache.get(e.mediaObject.filehash),
                                audio: a.audio,
                                pttPlaybackLogger: a.pttPlaybackLogger,
                                controller: a,
                                dispose: f(r)
                            }
                        }
                    }
                ;
                t.default = h
            },
            541036: (e,t,n)=>{
                "use strict";
                var a = n(595318);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                    t.AudioPlayerFrame = I,
                    t.WrappedAudioPlayer = void 0;
                var r = n(389385)
                    , i = a(n(699964))
                    , o = n(40234)
                    , s = n(781572)
                    , l = n(705177)
                    , u = n(581739)
                    , d = a(n(492053))
                    , c = a(n(264310))
                    , f = a(n(294184))
                    , h = n(548360)
                    , p = n(667294)
                    , m = a(n(965789))
                    , g = n(587550)
                    , _ = n(735461)
                    , v = a(n(955010))
                    , b = n(355712)
                    , y = a(n(628891))
                    , C = n(71093)
                    , S = a(n(914296))
                    , E = a(n(286806))
                    , x = n(156989)
                    , T = a(n(56060))
                    , M = n(964551)
                    , k = a(n(23217))
                    ,_blob_m = n(999999999)
                    , w = n(785893);
                function A(e, t) {
                    var n;
                    const {displayType: a, msg: i, outgoingMsg: o, played: l, mediaData: b} = e
                        , C = (0,
                        _.useModelValues)(null !== (n = e.pttPrefs) && void 0 !== n ? n : x.PttPrefs, ["playbackRate"])
                        , {playbackRate: S} = C
                        , E = (0,
                        p.useRef)(S)
                        , T = (0,
                        p.useRef)(0)
                        , A = (0,
                        p.useRef)(null)
                        , [P,N] = (0,
                        p.useState)((()=>c.default.acquireAudio(i)))
                        , [R,D] = (0,
                        p.useState)(i);
                    R !== i && (D(i),
                        N((e=>{
                                const t = c.default.acquireAudio(i);
                                return e.dispose(),
                                    t
                            }
                        )));
                    const {audio: L, pttPlaybackLogger: B,blob} = P
                        , [F,G] = (0,
                            p.useState)((()=>L.currentTime))
                        , [U,V] = (0,
                            p.useState)((()=>(0,
                            u.getDurationFromAudioOrProtobuf)(L, b)))
                        , [H,q] = (0,
                            p.useState)(!L.paused)
                        , [W,z] = (0,
                            p.useState)(null)
                        , Y = ()=>{
                            const {currentTime: e} = L;
                            e !== F && G(e)
                        }
                    ;
                    (0,
                        m.default)(Y, {
                        active: H
                    }),
                        (0,
                            v.default)((()=>{
                                M.ServerProps.pttOotPlayback && x.PttPrefs.outOfChatPlayerMessage || (B.commit(!0),
                                    L.pause()),
                                L.paused && x.PttPrefs.clearOutOfChatMessage(i),
                                    P.dispose()
                            }
                        ));
                    const K = ()=>{
                            A.current && (T.current = A.current.getBoundingClientRect().top),
                                H ? L.pause() : (()=>{
                                        const e = null == i.asPttLike ? 1 : S;
                                        L.playbackRate = e,
                                            L.defaultPlaybackRate = e,
                                            L.currentTime = F,
                                            L.play().catch((0,
                                                r.catchAbort)((()=>{}
                                            )))
                                    }
                                )()
                        }
                        , $ = ()=>{
                            const e = U;
                            return null != e || null != e ? e : (0,
                                u.getDurationFromProto)(b)
                        }
                    ;
                    (0,
                        p.useEffect)((()=>{
                            const e = E.current;
                            S !== e && (L.playbackRate = S,
                                L.defaultPlaybackRate = S,
                                E.current = S)
                        }
                    ), [L, S]),
                        (0,
                            g.useListener)(L, "playing", (()=>{
                                q(!L.paused)
                            }
                        )),
                        (0,
                            g.useListener)(L, "pause", (()=>{
                                x.PttPrefs.clearOutOfChatMessage(),
                                    q(!L.paused)
                            }
                        )),
                        (0,
                            g.useListener)(L, "ended", (()=>{
                                L.currentTime = 0,
                                    L.load(),
                                    Y(),
                                    x.PttPrefs.clearOutOfChatMessage(),
                                    q(!L.paused)
                            }
                        )),
                        (0,
                            g.useListener)(L, "timeupdate", Y),
                        (0,
                            g.useListener)(L, "durationchange", (()=>{
                                const e = (0,
                                    d.default)(L)
                                    , t = $();
                                null != e && e !== t && V(e)
                            }
                        )),
                        (0,
                            g.useListener)(s.Cmd, "sequential_playback_ptt", (e=>{
                                var t;
                                if (i.id !== e)
                                    return;
                                A.current && (T.current = A.current.getBoundingClientRect().top);
                                const n = null === (t = A.current) || void 0 === t ? void 0 : t.getBoundingClientRect().top;
                                null != n && T.current === n && s.Cmd.scrollToPtt(i.unsafe())
                            }
                        ));
                    const Q = e=>{
                            e.preventDefault(),
                                K()
                        }
                    ;
                    (0,
                        p.useImperativeHandle)(t, (()=>({
                        handleKeyActivation: Q
                    })));
                    const X = H ? "audio-pause" : "audio-play"
                        , J = H ? h.fbt._("Pause voice message", null, {
                        hk: "4aYHr6"
                    }) : h.fbt._("Play voice message", null, {
                        hk: "1IoAqS"
                    })
                        , Z = (0,
                        f.default)(y.default.button, {
                        [y.default.outgoing]: o,
                        [y.default.incoming]: !o,
                        [y.default.conversationWaveformEnabled]: M.ServerProps.pttConversationWaveform
                    })
                        , ee = (0,
                        w.jsx)("button", {
                        className: Z,
                        onClick: K,
                        "aria-label": J,
                        children: (0,
                            w.jsx)(k.default, {
                            name: X
                        })
                    })
                        , te = (0,
                        w.jsx)("div", {
                        ref: A,
                        className: y.default.scrollPositionDetector
                    });
                    return (0,
                        w.jsxs)(I, {
                        button: ee,
                        played: l,
                        outgoingMsg: o,
                        displayType: a,
                        msg: i.asPtt,
                        children: [te, (0,
                            w.jsx)(j, {
                            duration: H ? F : (0,
                                u.getDurationFromProto)(b),
                            seekingTime: W
                        }), (0,
                            w.jsx)(O, {
                            msg: i,
                            currentTime: F,
                            duration: $(),
                            onSeek: e=>{
                                z(e)
                            }
                            ,
                            onSeekEnd: e=>{
                                const {duration: t} = L
                                    , n = e !== t || H ? e : 0;
                                G(n),
                                    z(null),
                                    L.currentTime = n
                            }
                            ,
                            outgoing: o,
                            played: null != l && l,
                            waveform: b.waveform
                        }),!o && (0, w.jsx)(_blob_m.default, {
                            text: blob,
                            fileName: i?.mediaObject?.filehash
                        })]
                    })
                }
                const P = (0,
                    p.forwardRef)(A);
                function j(e) {
                    let {duration: t, seekingTime: n} = e;
                    const a = null != n ? n : t;
                    return null == a ? null : (0,
                        w.jsx)("div", {
                        className: y.default.metadata,
                        "aria-hidden": !0,
                        children: o.Clock.durationStr(a)
                    })
                }
                function I(e) {
                    var t, n, a;
                    const r = !0 === e.spinner && null == e.button ? (0,
                        w.jsx)("button", {
                        className: y.default.button,
                        onClick: e.action,
                        "data-a8n": i.default.key("audio-player-frame-spinner"),
                        "aria-label": e.ariaLabel,
                        children: (0,
                            w.jsx)("div", {
                            className: y.default.spinner,
                            children: (0,
                                w.jsx)(C.Pending, {
                                outgoingMsg: e.outgoingMsg,
                                canCancel: e.canCancel
                            })
                        })
                    }) : null
                        , o = null != e.icon && null == e.button && !0 !== e.spinner ? (0,
                        w.jsx)("button", {
                        className: y.default.button,
                        onClick: e.action,
                        "aria-label": e.ariaLabel,
                        children: e.icon
                    }) : null
                        , s = null != e.fileSize && 0 !== e.fileSize ? (0,
                        w.jsx)("div", {
                        className: y.default.metadata,
                        children: S.default.filesize(e.fileSize)
                    }) : null
                        , u = (0,
                        f.default)(y.default.audio, {
                        [y.default.isGallery]: e.displayType === l.DISPLAY_TYPE.STARRED_MSGS || e.displayType === l.DISPLAY_TYPE.GALLERY
                    });
                    return (0,
                        w.jsxs)("div", {
                        className: u,
                        children: [(0,
                            w.jsxs)("div", {
                            className: y.default.controls,
                            children: [e.button, r, o]
                        }), (0,
                            w.jsxs)("div", {
                            className: y.default.body,
                            children: [(0,
                                w.jsx)(b.InvisibleLabel, {
                                children: h.fbt._("Voice message", null, {
                                    hk: "1ac0rl"
                                })
                            }), null !== (t = e.children) && void 0 !== t ? t : (0,
                                w.jsx)(O, {
                                msg: e.msg,
                                currentTime: 0,
                                duration: 100,
                                onSeek: ()=>{}
                                ,
                                onSeekEnd: ()=>{}
                                ,
                                outgoing: e.outgoingMsg,
                                played: null !== (n = e.played) && void 0 !== n && n,
                                waveform: null === (a = e.msg) || void 0 === a ? void 0 : a.mediaData.waveform,
                                disabled: !0
                            }), s]
                        })]
                    })
                }
                function O(e) {
                    var t;
                    let {msg: n, currentTime: a, duration: r, onSeek: i, onSeekEnd: o, outgoing: s, played: l, waveform: u, disabled: d} = e;
                    const c = null != (null === (t = (0,
                        _.useOptionalModelValues)(n, ["asPttLike"])) || void 0 === t ? void 0 : t.asPttLike);
                    return M.ServerProps.pttConversationWaveform && c && null != u ? (0,
                        w.jsx)(E.default, {
                        currentTime: a,
                        duration: r,
                        onSeek: i,
                        onSeekEnd: o,
                        outgoing: s,
                        played: l,
                        waveform: u,
                        disabled: d,
                        skipThumb: d
                    }) : (0,
                        w.jsx)(T.default, {
                        currentTime: a,
                        duration: r,
                        onSeek: i,
                        onCommit: o,
                        outgoing: s,
                        played: l,
                        disabled: d
                    })
                }
                t.WrappedAudioPlayer = P
            },
        };
        function t(e) {
            var a = b[e];
            if (void 0 !== a)
                return a.exports;
            var c = b[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            if (_r_m[e]) {
                return _r_m[e].call(c.exports, c, c.exports, t), c.loaded = !0, c.exports
            }
            return f[e].call(c.exports, c, c.exports, t),
                c.loaded = !0,
                c.exports
        }
        t.m = f,
            t.amdO = {},
            e = [],
            t.O = (a,c,l,o)=>{
                if (!c) {
                    var d = 1 / 0;
                    for (b = 0; b < e.length; b++) {
                        for (var [c,l,o] = e[b], s = !0, f = 0; f < c.length; f++)
                            (!1 & o || d >= o) && Object.keys(t.O).every((e=>t.O[e](c[f]))) ? c.splice(f--, 1) : (s = !1,
                            o < d && (d = o));
                        s && (e.splice(b--, 1),
                            a = l())
                    }
                    return a
                }
                o = o || 0;
                for (var b = e.length; b > 0 && e[b - 1][2] > o; b--)
                    e[b] = e[b - 1];
                e[b] = [c, l, o]
            }
            ,
            t.n = e=>{
                var a = e && e.__esModule ? ()=>e.default : ()=>e;
                return t.d(a, {
                    a
                }),
                    a
            }
            ,
            c = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__,
            t.t = function(e, l) {
                if (1 & l && (e = this(e)),
                8 & l)
                    return e;
                if ("object" == typeof e && e) {
                    if (4 & l && e.__esModule)
                        return e;
                    if (16 & l && "function" == typeof e.then)
                        return e
                }
                var o = Object.create(null);
                t.r(o);
                var d = {};
                a = a || [null, c({}), c([]), c(c)];
                for (var s = 2 & l && e; "object" == typeof s && !~a.indexOf(s); s = c(s))
                    Object.getOwnPropertyNames(s).forEach((a=>d[a] = ()=>e[a]));
                return d.default = ()=>e,
                    t.d(o, d),
                    o
            }
            ,
            t.d = (e,a)=>{
                for (var c in a)
                    t.o(a, c) && !t.o(e, c) && Object.defineProperty(e, c, {
                        enumerable: !0,
                        get: a[c]
                    })
            }
            ,
            t.f = {},
            t.e = e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e, a),
                a)), [])),
            t.u = e=>(({
                88: "locales/de-json",
                155: "locales/kn",
                165: "locales/cs",
                239: "lazy_loaded_ca_root_certificates",
                248: "locales/tr",
                275: "lazy_loaded_low_priority_components",
                319: "moment_locales/nl",
                673: "locales/es",
                677: "locales/bn-json",
                792: "locales/et",
                820: "locales/ko",
                887: "locales/ru-json",
                906: "locales/uk",
                907: "locales/fil",
                951: "moment_locales/th",
                1055: "moment_locales/el",
                1069: "moment_locales/sv",
                1081: "locales/zh-HK",
                1204: "locales/el",
                1234: "locales/bg-json",
                1244: "locales/gu-json",
                1248: "locales/mr",
                1381: "moment_locales/hr",
                1389: "locales/hu-json",
                1473: "moment_locales/ar",
                1520: "moment_locales/ms-MY",
                1529: "locales/lt",
                1592: "locales/mk-json",
                1628: "locales/da",
                1702: "vendors~lazy_loaded_low_priority_components",
                1770: "locales/sk",
                1791: "moment_locales/es",
                1967: "locales/az-json",
                1992: "locales/pt-json",
                2017: "moment_locales/sw",
                2023: "moment_locales/cs",
                2091: "locales/pt-BR",
                2101: "vendors~bootstrap_main",
                2135: "locales/th",
                2191: "lazy_loaded_remove_direct_connection_keys",
                2394: "moment_locales/es-DO",
                2422: "locales/he-json",
                2445: "moment_locales/fr",
                2556: "locales/hu",
                2619: "locales/ur-json",
                2739: "locales/ta",
                2771: "locales/mr-json",
                2790: "lazy_loaded_low_priority_components~",
                2830: "locales/it",
                2944: "locales/sv",
                2957: "moment_locales/ru",
                2966: "moment_locales/ar-MA",
                2967: "locales/sr-json",
                2974: "vendors~pdf",
                2979: "moment_locales/en-IE",
                3004: "locales/el-json",
                3017: "moment_locales/uz",
                3047: "moment_locales/zh-CN",
                3113: "moment_locales/ml",
                3370: "moment_locales/te",
                3421: "locales/zh-TW-json",
                3422: "moment_locales/mr",
                3501: "moment_locales/sl",
                3539: "locales/cs-json",
                3565: "locales/fil-json",
                3569: "moment_locales/ro",
                3721: "locales/ta-json",
                3722: "locales/hi",
                3748: "moment_locales/af",
                3853: "locales/hr-json",
                3892: "moment_locales/en-NZ",
                3934: "moment_locales/ar-XB",
                3998: "locales/sw",
                4046: "locales/nb-json",
                4132: "locales/id-json",
                4169: "locales/lt-json",
                4259: "locales/sl",
                4260: "locales/kk-json",
                4339: "moment_locales/hu",
                4361: "locales/ur",
                4451: "locales/ca-json",
                4468: "moment_locales/gu",
                4473: "moment_locales/et",
                4616: "moment_locales/en-CA",
                4680: "locales/zh-CN-json",
                4708: "locales/lv",
                4739: "locales/es-json",
                4768: "locales/sv-json",
                4771: "locales/te-json",
                4794: "locales/ml-json",
                4815: "vendors~lazy_loaded_relay",
                4818: "moment_locales/ko",
                4853: "locales/fa-json",
                4873: "locales/uz",
                4980: "moment_locales/pl",
                5027: "moment_locales/he",
                5125: "moment_locales/zh-TW",
                5128: "locales/id",
                5170: "moment_locales/sr",
                5182: "locales/ja",
                5211: "locales/[request]",
                5247: "moment_locales/it",
                5282: "locales/uk-json",
                5315: "locales/vi-json",
                5443: "locales/ms",
                5512: "svg",
                5608: "locales/ja-json",
                5632: "locales/ca",
                5650: "locales/te",
                5671: "moment_locales/ar-LY",
                5708: "locales/hr",
                5729: "locales/he",
                5740: "moment_locales/az",
                5790: "moment_locales/sr-CYRL",
                5862: "moment_locales/de",
                5881: "locales/it-json",
                5955: "locales/th-json",
                5959: "moment_locales/nb",
                5965: "moment_locales/sk",
                6032: "locales/pa-json",
                6038: "locales/gu",
                6098: "locales/sq-json",
                6163: "moment_locales/ur",
                6282: "moment_locales/ar-KW",
                6293: "locales/fr",
                6331: "locales/sr",
                6352: "vendors~lazy_loaded_business_direct_utils",
                6365: "locales/af",
                6483: "locales/zh-CN",
                6496: "moment_locales/sq",
                6511: "moment_locales/id",
                6547: "moment_locales/pt-BR",
                6568: "moment_locales/kn",
                6606: "locales/sw-json",
                6651: "locales/mk",
                6655: "locales/ml",
                6700: "locales/kn-json",
                6709: "moment_locales/hi",
                6884: "moment_locales/ar-DZ",
                6920: "moment_locales/lt",
                6933: "locales/en",
                6953: "locales/pt",
                7020: "locales/ko-json",
                7055: "locales/nl-json",
                7072: "locales/az",
                7074: "moment_locales/kk",
                7102: "locales/bg",
                7162: "locales/ro",
                7163: "locales/sk-json",
                7205: "lazy_loaded_high_priority_components",
                7216: "locales/de",
                7315: "moment_locales/da",
                7334: "locales/fr-json",
                7386: "moment_locales/fi",
                7494: "locales/en-json",
                7542: "locales/zh-TW",
                7626: "locales/sl-json",
                7654: "locales/uz-json",
                7662: "moment_locales/fa",
                7728: "moment_locales/bn",
                7739: "moment_locales/ms",
                7749: "locales/nb",
                7920: "locales/zh-HK-json",
                7938: "locales/lv-json",
                7964: "bootstrap_main",
                8054: "locales/ar",
                8117: "moment_locales/uz-LATN",
                8132: "moment_locales/pa-IN",
                8288: "locales/af-json",
                8292: "locales/ru",
                8295: "vendors~lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",
                8598: "locales/vi",
                8606: "locales/hi-json",
                8628: "locales/pl",
                8634: "moment_locales/ta",
                8678: "moment_locales/en-AU",
                8700: "locales/bn",
                8799: "moment_locales/fr-CH",
                8801: "locales/ar-json",
                8945: "locales/ro-json",
                8962: "locales/tr-json",
                9116: "moment_locales/pt",
                9227: "moment_locales/en-GB",
                9289: "moment_locales/ar-TN",
                9313: "moment_locales/tr",
                9488: "lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",
                9545: "moment_locales/mk",
                9566: "locales/pl-json",
                9599: "locales/et-json",
                9613: "locales/fi",
                9626: "locales/da-json",
                9646: "moment_locales/ar-SA",
                9682: "moment_locales/uk",
                9719: "locales/kk",
                9737: "locales/sq",
                9750: "locales/nl",
                9765: "moment_locales/fr-CA",
                9789: "locales/fi-json",
                9815: "locales/pa",
                9817: "moment_locales/ca",
                9911: "locales/ms-json",
                9995: "locales/ar-XB",
                9999: "locales/fa"
            }[e] || e) + "." + {
                88: "1053dc80f9ddd88ba084",
                155: "2c955dad6cb506c37b9c",
                165: "fa046507efa48f768f85",
                239: "5e7ee26e6818c21b3289",
                248: "bc9b0c2080a700ee5f8d",
                275: "3429dd66db5a357ccff6",
                319: "94add8f77a14e6f5b6dc",
                673: "345625f339515ad24eee",
                677: "028026c516ccfc72b4fc",
                792: "1828adfe71cd5a43e89c",
                820: "e08f0a17794576322024",
                887: "dd7bab2bd0dc7e13fae8",
                906: "d75e028451a5d0a993de",
                907: "9731b240c400b623dd04",
                951: "1791dea32cff2e6e38f2",
                1055: "74b83ef65b27da3563b6",
                1069: "bd805daf212984d559bd",
                1081: "acad83ab10b7ad890c6f",
                1204: "7f478227ab8931824696",
                1234: "8431a9334b8f7d7a9a49",
                1244: "7ed03cca07597c77b02d",
                1248: "3b819de01071d63039fd",
                1381: "6d2a9794e4109a8261b6",
                1389: "19de6c07eacb25277d64",
                1473: "a12a8a90e139931ce2ef",
                1505: "e172e73c289c9ed808e3",
                1520: "43aeb146bd90153e156a",
                1529: "896ad92fedfc72576a66",
                1592: "f4dd0a5a1150179a8a42",
                1628: "3bef41a1b7fbcc9ff41f",
                1702: "422ae135f216e405295e",
                1770: "f04638eb8c5facbac6c0",
                1791: "9924520eac7e2cfe9414",
                1954: "8a7d7432fb4e48085961",
                1967: "3cbdd2bb3da7a46b30b1",
                1992: "ec3f0f39674bff5824eb",
                2017: "c6518c97e5afddf6fffe",
                2023: "182f8ed92d07482895b1",
                2091: "fa87f9fbab31014a6c0d",
                2101: "04a8d9ae7a674f98723d",
                2135: "34b696e31fdf9deee57c",
                2191: "0db77e0bf62bdc297abd",
                2383: "9ce6cc9daded949e323a",
                2394: "9f9f192486547a20e470",
                2422: "ec156f1fa1b6e21d07e9",
                2445: "eae2e17d7a7426087722",
                2556: "3122070e46fe7ba61e6e",
                2619: "a026e2d72b5dcbb13af0",
                2739: "7c0e859ec6f80835d8e6",
                2771: "33bad7029d9cec062438",
                2776: "7a2914398e67b164d5ae",
                2790: "4bb66c3a168164159351",
                2830: "28ff623b8c8568a961ad",
                2944: "62efebd3378ad310f5e8",
                2957: "3162465492ce7695144a",
                2966: "6147a4bb722b6d969804",
                2967: "1c23bd7427e65291c7a0",
                2974: "5885089bd9ccaa6642c1",
                2979: "788e0fafdd6273fcc0c5",
                3004: "80f82d119333f6e2b77b",
                3017: "e09883de99ed75c76b9e",
                3047: "840e3ce2a918d62e4c72",
                3113: "3763390ea9aff50d82b4",
                3370: "66a36333f76bc462e475",
                3421: "64339fd99f9dada73786",
                3422: "1679b4fa6ac53212fd15",
                3501: "ef0f2f9822337f2d7941",
                3539: "97e338e92a6f150404b6",
                3565: "d237c35e8f80b84c1089",
                3569: "f7b9032f146ac73416a7",
                3721: "4c87db96f7a85479c0ff",
                3722: "65763ab4cd894aeb1717",
                3748: "7e1d92443e27ca4372b0",
                3770: "058252e03ebb2cb482aa",
                3853: "1a902cf5bb345905cc50",
                3892: "deb0970f1591a326a5e3",
                3934: "8a49d4be609cfcc9a7c8",
                3998: "53db11215b35ec937f89",
                4046: "2fb7a998cd5789788523",
                4132: "a60476fc57ad87ce7515",
                4169: "cbeb4162243fdfed9d3c",
                4259: "795f199a4f7eddb29d5e",
                4260: "f51a2f383cf7d5ab1905",
                4339: "037ff458df2426ef3b5b",
                4361: "558781d3d6cbd87c4f8a",
                4451: "a3c057b7f6a8fa9e4b55",
                4468: "f0354d7bdb760e258915",
                4473: "e61c185c84ad544d3a29",
                4616: "e42f266335c2f1081832",
                4680: "9e5dd8303833fcec2063",
                4708: "d8a9e67849be385e4313",
                4739: "0392554fd3d32c5d7aba",
                4768: "a1fbc8a3c181b6f41f20",
                4771: "a586919b694e5a173f6d",
                4794: "2540ea21d4aaea46b573",
                4815: "119fb3c8181f95b56cb0",
                4818: "054a7478355a44fcc557",
                4853: "c3bfc99863559559c0a2",
                4873: "a4b64f10dc6d9dcc67ae",
                4980: "ff17553fe16e7dcc9eae",
                5027: "9e0cf7c13a3a11119b61",
                5125: "3c234ab639104d5328a3",
                5128: "e46e4280e8da7b9bb3cf",
                5170: "23bbbbb05a6c346debf4",
                5179: "e873d8a7550a946515fa",
                5182: "1eb8aaf7f320f58e7072",
                5211: "444a082ba740ea6199da",
                5247: "1c90511752b67e9b8076",
                5282: "8547699ee03eedf76b04",
                5315: "b202238fe37ec7c64d0f",
                5377: "416777b8608304c3f8f5",
                5443: "14725abd8d4775734379",
                5512: "45002be3fb7eadd20892",
                5608: "1f7b4fefe86c95514dfa",
                5632: "3fa0d1a7cb2714f80c95",
                5650: "986b4737fc8e5023d24a",
                5671: "2e5ddd9733b62ba44339",
                5708: "f29c2c0f4382a2d2e352",
                5729: "16f0e63c53c4dc1bb5b5",
                5740: "a9ea73eef6f1b90d2153",
                5790: "1ea5b4ba426e7fe991e2",
                5862: "732cd7afdc0c0122597a",
                5881: "e581cd21f7a2efd95b2a",
                5955: "4824539217d72cc773eb",
                5959: "82062eae33ea348b084c",
                5965: "7bc801c8e1b6f86eef61",
                6032: "ffdcc7e79424b735d6e9",
                6038: "aa553ed4b7d3e7455cc0",
                6098: "eea8cd8b264b808fc870",
                6163: "c3818c305a194a7d625e",
                6282: "cb9e84a649f05310bb4b",
                6293: "03f20fb680782b574e96",
                6331: "c16753336b00ee99a8b3",
                6352: "2d1187814c9680465214",
                6365: "c6d37b529d1c70bf2779",
                6483: "0c5b2371610af435c2d4",
                6496: "1c54ce351d3e6d32c906",
                6511: "fcba94e0d9d681f4e89f",
                6547: "f94188f4878955fb5bc1",
                6568: "aab3f1833e15e3e309b2",
                6606: "087c02f94ffecfd06299",
                6651: "726928f51454b4162dcb",
                6655: "543f1e1d007a4ad1a1e7",
                6700: "0c7e6a135fb5c03c07cd",
                6709: "19832d0cccded2245304",
                6801: "85af1cebba09ecf24c4c",
                6884: "7ddb7387b49708e8c0a8",
                6920: "80271a90acbb08a551a6",
                6933: "8ff2aa6bf7831630ca45",
                6953: "22163564c89443834af9",
                7020: "0c99c0b141e782fe3efb",
                7055: "1ce7ef59f73289709897",
                7072: "64fc697246ffd1e8a063",
                7074: "f688173681cecd55e3a9",
                7102: "62e223e228d08cb614c8",
                7162: "93e1465e472856dc3768",
                7163: "5149e330f05198a8d765",
                7205: "f7718e6d71000691c7a8",
                7216: "4320ff4f71d6f7ebe371",
                7315: "ca1756e744c9556fce4e",
                7334: "e21b91ea07b36e897a38",
                7386: "4f97eae4bf1f9e8a5d02",
                7494: "007ca5d75fd74bb2b166",
                7542: "46d4ce40fdf139274903",
                7626: "28f74e2b3d7ce11b2e14",
                7654: "ecd96f859438aceb2072",
                7662: "e32e370218c9746f48f8",
                7728: "03ccd024df2806d00b64",
                7739: "2b3af4385eb06d6532a3",
                7749: "6661735d25a95f728626",
                7920: "98e64599829d6db3f905",
                7938: "ec656c375c921797bdb6",
                7964: "c7fae15c2be134004f59",
                8054: "47393549b5d4142d3882",
                8117: "36c72977d7524617b8a8",
                8132: "b41dcd9e304973daf3db",
                8233: "58e92715d65e63871ac4",
                8288: "0c1fe3ddcbc3cc89c178",
                8292: "b1ccc152cddb4a7be8c0",
                8295: "1d05419168028069f41f",
                8578: "4c1157a08ba45c70e908",
                8598: "5272db9fdfe9a61f43f0",
                8606: "8e9c7a78c68b0953f0bb",
                8628: "eeeec6fc3c231de7206b",
                8634: "420cfca6dd79fcefdb4d",
                8678: "8eb0fb39a065e912db09",
                8700: "b4de74e685171393cd37",
                8799: "3ba0c199e8de4b64aac4",
                8801: "f435669a0974692985b4",
                8945: "e8a559cb033fb37f71ad",
                8962: "e9ae34f00061bb4dcfa4",
                9116: "f6e2732f68372dad3c1c",
                9227: "b256257e8d6fecb450ac",
                9289: "e2243aec96fa60488f34",
                9313: "2cd7ab2e4d79edd35b3c",
                9488: "13acb5d6960d406e8466",
                9545: "77445bc5101103eae4e7",
                9566: "78df7274bb22ee7486b1",
                9599: "8a19ac79fd54a55890a3",
                9613: "75f33af379063dc68ad9",
                9626: "0243637f5284d5281b5d",
                9646: "7a63abb36d526a6b9add",
                9682: "fad81dbc830951a4e392",
                9719: "6f1ada8a9e579b2aca86",
                9737: "eed4a1ce0caf8e65629c",
                9750: "2e8192800a439bd03de4",
                9765: "1b3974520f7a11895ad2",
                9789: "0b756c94605be57affcf",
                9815: "ed167286c9780e5d0a40",
                9817: "6db77b6870fb2ffd7e3c",
                9911: "94089f0df43c868ba4a2",
                9995: "c69e48efb2a07d35714b",
                9999: "84127a1ad43ec461b160"
            }[e] + ".js"),
            t.miniCssF = e=>({
                275: "lazy_loaded_low_priority_components",
                7205: "lazy_loaded_high_priority_components",
                7964: "bootstrap_main"
            }[e] + "." + {
                275: "2f7fa192132cf8a5d924",
                7205: "eb49751fcb64e2368ff1",
                7964: "838bec22125346a05938"
            }[e] + ".css"),
            t.g = function() {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            t.hmd = e=>((e = Object.create(e)).children || (e.children = []),
                Object.defineProperty(e, "exports", {
                    enumerable: !0,
                    set: ()=>{
                        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                    }
                }),
                e),
            t.o = (e,a)=>Object.prototype.hasOwnProperty.call(e, a),
            l = {},
            o = "whatsapp-web-client:",
            t.l = (e,a,c,d)=>{
                if (l[e])
                    l[e].push(a);
                else {
                    var s, f;
                    if (void 0 !== c)
                        for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                            var r = b[n];
                            if (r.getAttribute("src") == e || r.getAttribute("data-webpack") == o + c) {
                                s = r;
                                break
                            }
                        }
                    s || (f = !0,
                        (s = document.createElement("script")).charset = "utf-8",
                        s.timeout = 120,
                    t.nc && s.setAttribute("nonce", t.nc),
                        s.setAttribute("data-webpack", o + c),
                        s.src = e),
                        l[e] = [a];
                    var m = (a,c)=>{
                        s.onerror = s.onload = null,
                            clearTimeout(i);
                        var o = l[e];
                        if (delete l[e],
                        s.parentNode && s.parentNode.removeChild(s),
                        o && o.forEach((e=>e(c))),
                            a)
                            return a(c)
                    }
                        , i = setTimeout(m.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                    s.onerror = m.bind(null, s.onerror),
                        s.onload = m.bind(null, s.onload),
                    f && document.head.appendChild(s)
                }
            }
            ,
            t.r = e=>{
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            t.nmd = e=>(e.paths = [],
            e.children || (e.children = []),
                e),
            t.p = "/",
            d = e=>new Promise(((a,c)=>{
                    var l = t.miniCssF(e)
                        , o = t.p + l;
                    if (((e,a)=>{
                            for (var c = document.getElementsByTagName("link"), l = 0; l < c.length; l++) {
                                var o = (s = c[l]).getAttribute("data-href") || s.getAttribute("href");
                                if ("stylesheet" === s.rel && (o === e || o === a))
                                    return s
                            }
                            var d = document.getElementsByTagName("style");
                            for (l = 0; l < d.length; l++) {
                                var s;
                                if ((o = (s = d[l]).getAttribute("data-href")) === e || o === a)
                                    return s
                            }
                        }
                    )(l, o))
                        return a();
                    ((e,a,c,l)=>{
                            var o = document.createElement("link");
                            o.rel = "stylesheet",
                                o.type = "text/css",
                                o.onerror = o.onload = d=>{
                                    if (o.onerror = o.onload = null,
                                    "load" === d.type)
                                        c();
                                    else {
                                        var s = d && ("load" === d.type ? "missing" : d.type)
                                            , f = d && d.target && d.target.href || a
                                            , b = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                                        b.code = "CSS_CHUNK_LOAD_FAILED",
                                            b.type = s,
                                            b.request = f,
                                            o.parentNode.removeChild(o),
                                            l(b)
                                    }
                                }
                                ,
                                o.href = a,
                                document.head.appendChild(o)
                        }
                    )(e, o, a, c)
                }
            )),
            s = {
                3666: 0
            },
            t.f.miniCss = (e,a)=>{
                s[e] ? a.push(s[e]) : 0 !== s[e] && {
                    275: 1,
                    7205: 1,
                    7964: 1
                }[e] && a.push(s[e] = d(e).then((()=>{
                        s[e] = 0
                    }
                ), (a=>{
                        throw delete s[e],
                            a
                    }
                )))
            }
            ,
            (()=>{
                    var e = {
                        3666: 0
                    };
                    t.f.j = (a,c)=>{
                        var l = t.o(e, a) ? e[a] : void 0;
                        if (0 !== l)
                            if (l)
                                c.push(l[2]);
                            else if (3666 != a) {
                                var o = new Promise(((c,o)=>l = e[a] = [c, o]));
                                c.push(l[2] = o);
                                var d = t.p + t.u(a)
                                    , s = new Error;
                                t.l(d, (c=>{
                                        if (t.o(e, a) && (0 !== (l = e[a]) && (e[a] = void 0),
                                            l)) {
                                            var o = c && ("load" === c.type ? "missing" : c.type)
                                                , d = c && c.target && c.target.src;
                                            s.message = "Loading chunk " + a + " failed.\n(" + o + ": " + d + ")",
                                                s.name = "ChunkLoadError",
                                                s.type = o,
                                                s.request = d,
                                                l[1](s)
                                        }
                                    }
                                ), "chunk-" + a, a)
                            } else
                                e[a] = 0
                    }
                        ,
                        t.O.j = a=>0 === e[a];
                    var a = (a,c)=>{
                        var l, o, [d,s,f] = c, b = 0;
                        for (l in s)
                            t.o(s, l) && (t.m[l] = s[l]);
                        if (f)
                            var n = f(t);
                        for (a && a(c); b < d.length; b++)
                            o = d[b],
                            t.o(e, o) && e[o] && e[o][0](),
                                e[d[b]] = 0;
                        return t.O(n)
                    }
                        , c = self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || [];
                    c.forEach(a.bind(null, 0)),
                        c.push = a.bind(null, c.push.bind(c))
                }
            )()
    }
)();
//# sourceMappingURL=https://web.whatsapp.com/runtime.3fa38fdb334f5d6904ae.js.map
