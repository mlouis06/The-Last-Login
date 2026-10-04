(() => {
  "use strict";

  const STORAGE_KEY = "the-last-login-chapter1-public";

  const story = {
    subject: {
      name: "Lena Ortiz",
      age: 21,
      disappeared: "November 17, 2019",
      location: "Greywater, Oregon",
      status: "Closed — voluntary disappearance",
      official: "Lena left town after an argument with family. A handwritten note and a debit-card purchase outside the county were cited as supporting evidence.",
      recovery: "A forensic image labeled LORTIZ_PERSONAL was found during a 2026 evidence-room audit. The physical laptop is missing.",
      reportImage: "assets/images/case_report.jpg"
    },

    files: [
      {
        id: "case_intake",
        title: "intake_19-117.txt",
        folder: "CASE_EXPORT",
        date: "2019-11-19",
        preview: "Initial missing-person intake. Classification changed after 72 hours.",
        clue: "RUNAWAY",
        text:
`GREYWATER COUNTY SHERIFF'S OFFICE
CASE 19-117

SUBJECT: ORTIZ, LENA M.
AGE: 21

11/18 — Mother reports subject failed to return home.
11/19 — Vehicle located at Greywater Transit Park & Ride.
11/20 — Handwritten note recovered from subject's bedroom.
11/21 — Debit purchase recorded in Briar County, 63 miles east.

ASSESSMENT:
No evidence of forced entry or physical struggle.
Subject has prior history of leaving residence after family conflict.

STATUS UPDATED:
VOLUNTARY DEPARTURE / NO IMMEDIATE THREAT.

NOTE:
Mother disputes handwriting on recovered note.`
      },
      {
        id: "note_scan",
        title: "note_transcription.txt",
        folder: "CASE_EXPORT",
        date: "2019-11-20",
        preview: "Transcription of the note used to support voluntary-departure classification.",
        clue: "NOTE",
        image: "assets/images/note_scan.jpg",
        imageLabel: "View Original Scan",
        text:
`TRANSCRIPTION — HANDWRITTEN NOTE

I'm done being watched.
I need a few days where nobody knows where I am.
Don't call me. Don't look for me.
I'll come back when I can breathe.

— L

FORENSIC HANDWRITING REVIEW: NOT REQUESTED`
      },
      {
        id: "parking",
        title: "parking_gate.csv",
        folder: "DEVICE_LOGS",
        date: "2019-11-17",
        preview: "Municipal Park & Ride access export.",
        clue: "PARKING",
        image: "assets/images/parking_access.png",
        imageLabel: "View Original Export",
        text:
`timestamp,gate,event,credential
2019-11-17 18:42:16,EAST,ENTRY,PLATE_7JQK221
2019-11-17 20:11:03,EAST,EXIT,PLATE_4MDL919
2019-11-17 23:58:44,WEST,MANUAL_OVERRIDE,STAFF_032
2019-11-18 00:02:09,WEST,EXIT,PLATE_7JQK221

PLATE_7JQK221: registered to Lena Ortiz.
STAFF_032: credential owner not included in export.`
      },
      {
        id: "browser",
        title: "browser_history.txt",
        folder: "USER_DATA",
        date: "2019-11-17",
        preview: "Recovered searches from the final week.",
        clue: "WATCHED",
        text:
`RECOVERED BROWSER HISTORY

NOV 12  01:14  "how to know if someone has remote access to laptop"
NOV 12  01:19  "webcam light turns on by itself"
NOV 13  22:03  "greywater tenant rights hidden camera"
NOV 15  00:44  "how to check router login history"
NOV 16  23:51  "morrow motor lodge"
NOV 17  13:09  "bus schedule briar county"
NOV 17  13:11  "can card purchase location be faked"

Search history was cleared at 02:06 on Nov 18.
This copy was recovered from browser cache.`
      },
      {
        id: "calendar",
        title: "calendar_export.txt",
        folder: "USER_DATA",
        date: "2019-11-17",
        preview: "Personal calendar export.",
        clue: "SHIFT",
        text:
`NOVEMBER 17, 2019

08:00 — shift / Copper Finch
15:30 — pick up prescription
18:00 — dinner w mom
21:15 — "M"

NOVEMBER 18, 2019

09:00 — shift / Copper Finch
13:00 — dentist

NOTE:
Copper Finch manager: Lena had never missed a shift without calling.`
      },
      {
        id: "recovered_draft",
        title: "draft_17.tmp",
        folder: "RECOVERED",
        date: "2019-11-17",
        preview: "Autosaved text fragment. Original application unknown.",
        clue: "DRAFT",
        text:
`I know this sounds paranoid.

The first time I thought it was the apartment.
Then it happened at work.

Same thing. Camera on. No app open.

Mara says I should tell someone but if I'm right, whoever it is already knows I noticed.

I copied the logs.
I put them where we used to leave things when we were kids.

If I don't show up tomorrow, don't trust the note.`
      }
    ],

    mail: [
      {
        id: "mail_mom",
        from: "Elena Ortiz <eortiz@hushmail.example>",
        to: "Lena Ortiz",
        subject: "Dinner",
        date: "Nov 17, 2019 4:08 PM",
        clue: "DINNER",
        preview: "Are you still coming at six?",
        text:
`Are you still coming at six?

I know you're upset with me. We don't have to talk about any of it.
Just come eat something.

— Mom

[No reply recovered]`
      },
      {
        id: "mail_security",
        from: "Copper Finch Scheduling",
        to: "Lena Ortiz",
        subject: "Schedule confirmation",
        date: "Nov 16, 2019 9:14 AM",
        preview: "Your opening shift Monday begins at 09:00.",
        text:
`Your opening shift Monday begins at 09:00.

Please reply if you cannot attend.`
      },
      {
        id: "mail_mara",
        from: "Mara Vale",
        to: "Lena Ortiz",
        subject: "don't send it here",
        date: "Nov 17, 2019 12:42 AM",
        clue: "MARA_EMAIL",
        preview: "Use the old address. Not this one.",
        text:
`Use the old address. Not this one.

And stop writing details in email.
If that thing is actually mirroring your screen, you're giving them everything.

I mean it.

— M`
      },
      {
        id: "mail_briar",
        from: "transactions@northstarbank.example",
        to: "Lena Ortiz",
        subject: "Card activity",
        date: "Nov 18, 2019 7:31 AM",
        clue: "CARD",
        preview: "A purchase of $11.84 was approved.",
        image: "assets/images/briar_receipt.jpg",
        imageLabel: "Open Receipt Attachment",
        text:
`CARD ENDING 4402
$11.84
BRIAR QUICKMART #6
NOV 18 — 07:29 AM

Transaction method: MAGNETIC STRIPE
Cardholder verification: NONE
Device capability: CHIP READER AVAILABLE`
      }
    ],

    messages: [
      {
        id: "thread_mara",
        name: "Mara",
        preview: "Don't say his name here.",
        clue: "MARA_THREAD",
        lines: [
          ["LENA", "11/16 10:48 PM", "It happened again."],
          ["MARA", "11/16 10:49 PM", "camera?"],
          ["LENA", "11/16 10:49 PM", "Yeah. At work this time."],
          ["MARA", "11/16 10:50 PM", "Then it's not your apartment."],
          ["LENA", "11/16 10:51 PM", "I know."],
          ["MARA", "11/16 10:53 PM", "Did you check the account log?"],
          ["LENA", "11/16 10:54 PM", "There was another login."],
          ["MARA", "11/16 10:54 PM", "From where?"],
          ["LENA", "11/16 10:55 PM", "Greywater."],
          ["MARA", "11/16 10:56 PM", "That narrows it down to literally everyone."],
          ["LENA", "11/16 11:02 PM", "Don't say his name here."],
          ["MARA", "11/16 11:04 PM", "I wasn't going to."]
        ]
      },
      {
        id: "thread_mom",
        name: "Mom",
        preview: "You said six.",
        clue: "MOM_THREAD",
        lines: [
          ["MOM", "11/17 5:47 PM", "I made too much food again."],
          ["MOM", "11/17 6:08 PM", "You said six."],
          ["MOM", "11/17 6:31 PM", "Lena?"],
          ["MOM", "11/17 7:03 PM", "Please just tell me you're okay."],
          ["MOM", "11/17 9:19 PM", "I'm coming over."],
          ["MOM", "11/17 9:42 PM", "Your car isn't here. Call me."]
        ]
      },
      {
        id: "thread_unknown",
        name: "Unknown (archived)",
        preview: "You left something under the seat.",
        clue: "UNKNOWN_THREAD",
        lines: [
          ["UNKNOWN", "11/15 1:07 AM", "You left something under the seat."],
          ["LENA", "11/15 1:13 AM", "Who is this?"],
          ["UNKNOWN", "11/15 1:14 AM", "Wrong number."],
          ["LENA", "11/15 1:15 AM", "Then how do you know I was in a car?"],
          ["UNKNOWN", "11/15 1:20 AM", "[message deleted]"]
        ]
      }
    ],

    hiddenFiles: [
      {
        id: "os_manifest",
        title: "manifest.txt",
        folder: "SYSTEM_RECOVERY",
        date: "2020-01-04",
        preview: "Image construction manifest.",
        clue: "MANIFEST",
        text:
`FORENSIC IMAGE MANIFEST

LABEL: LORTIZ_PERSONAL
CREATED: 2020-01-04 03:11:22
SOURCE COUNT: 4

SOURCE_A: cloud_export_LORTIZ
SOURCE_B: android_backup_LORTIZ
SOURCE_C: browser_cache_LORTIZ
SOURCE_D: UNKNOWN_VOLUME_03

WARNING:
COMPOSITE IMAGE.
Not a direct copy of one device.

Operator ID: STAFF_032`
      },
      {
        id: "watch_index",
        title: "index.dat",
        folder: "SYSTEM_RECOVERY/WATCH",
        date: "2019-11-17",
        preview: "Recovered folder index.",
        clue: "WATCH_INDEX",
        text:
`WATCH INDEX

ORTIZ_L
VALE_M
KERR_A
PATEL_J
ORTIZ_E
HALE_R

6 profiles active.
Last collection cycle: 2019-11-17 23:41

Collection modules:
screen_capture
camera_probe
browser_mirror
message_export

OWNER FIELD: [corrupt]`
      }
    ]
  };

  const connectionRecipes = [
    {
      needs: ["NOTE", "DRAFT"],
      id: "NOTE_FALSE",
      result: "The note may have been staged. Lena's recovered draft explicitly warns not to trust a note if she disappears."
    },
    {
      needs: ["PARKING", "CARD"],
      id: "MOVEMENT_FALSE",
      result: "The evidence used to place Lena outside Greywater is weak: her car left via a staff override, and her card was swiped without cardholder verification."
    },
    {
      needs: ["WATCHED", "MARA_THREAD"],
      id: "SURVEILLANCE",
      result: "Lena and Mara were independently discussing unauthorized camera activity and account access before Lena vanished."
    },
    {
      needs: ["MANIFEST", "PARKING"],
      id: "STAFF032",
      result: "STAFF_032 links the parking-gate override to the later creation of the composite evidence image."
    }
  ];

  const searchIndex = [
    { key: "morrow", label: "Recovered location reference", body: "MORROW MOTOR LODGE // closed 2018 // demolition permit pending in 2019. A cached note references room 14 and the phrase 'same place as before'.", clue: "MORROW" },
    { key: "staff_032", label: "Credential cross-reference", body: "STAFF_032 appears in municipal parking logs and in the evidence-image creation manifest.", clue: "STAFF032_SEARCH" },
    { key: "camera", label: "Camera-related artifacts", body: "3 artifacts match: browser history, Mara thread, WATCH index (if recovered).", clue: null },
    { key: "room 14", label: "Deleted note fragment", body: "Fragment: 'If M doesn't answer, leave it behind the loose vent in 14. Don't bring the laptop.'", clue: "ROOM14" },
    { key: "briar", label: "Briar County reference", body: "The only recovered evidence placing Lena in Briar County is the debit-card swipe. Transaction used magnetic stripe despite chip-reader availability.", clue: null }
  ];

  const defaultState = {
    booted: false,
    view: "brief",
    opened: [],
    clues: [],
    conclusions: [],
    selectedClues: [],
    hiddenUnlocked: false,
    watchUnlocked: false,
    searched: [],
    notes: "",
    interactionCount: 0,
    scares: [],
    elapsed: 0,
    objectiveStage: 0,
    currentObjective: 0,
    hintLevels: {},
    recapSeen: false,
    chapterTwoEntered: false,
    notificationFlags: {},
    audioOn: true,
    integrity: 97.4
  };


  const objectivesList = [
    {
      id: "read_case",
      title: "Read the original case finding",
      hints: [
        "Start with the official version of what happened before touching the recovered evidence.",
        "The CASE FILE explains why investigators believed Lena left voluntarily.",
        "Open CASE FILE and read the original finding."
      ],
      check: () => state.opened.includes("brief")
    },
    {
      id: "find_note",
      title: "Find the note used to classify Lena as a voluntary disappearance",
      hints: [
        "Look for the artifact investigators treated as proof Lena intended to leave.",
        "The document is in the recovered case export, not Mail or Messages.",
        "Open FILES and read note_transcription.txt."
      ],
      check: () => has("NOTE")
    },
    {
      id: "find_draft",
      title: "Find evidence that challenges the note",
      hints: [
        "Lena may have written something before disappearing that changes how the note should be read.",
        "Check the RECOVERED material for an autosaved or deleted text fragment.",
        "Open draft_17.tmp in FILES."
      ],
      check: () => has("DRAFT")
    },
    {
      id: "connect_note",
      title: "Compare the note with Lena's recovered draft",
      hints: [
        "Two recovered artifacts refer to the same possibility in very different ways.",
        "Use the Evidence board to connect the goodbye note with Lena's recovered draft.",
        "Connect NOTE + DRAFT."
      ],
      check: () => concluded("NOTE_FALSE")
    },
    {
      id: "track_car",
      title: "Reconstruct how Lena's car left the Park & Ride",
      hints: [
        "The official timeline depends on Lena's movement after she disappeared. Verify both the vehicle and the card activity.",
        "One clue is in a parking/access log. The other is in an emailed transaction record.",
        "Find PARKING in FILES and CARD in MAIL."
      ],
      check: () => has("PARKING") && has("CARD")
    },
    {
      id: "connect_car",
      title: "Compare the car and card activity",
      hints: [
        "Look closely at what each record proves—and what it does not.",
        "Compare the parking override with the way the Briar transaction was processed.",
        "Connect PARKING + CARD."
      ],
      check: () => concluded("MOVEMENT_FALSE")
    },
    {
      id: "manifest",
      title: "Inspect the newly recovered system manifest",
      hints: [
        "Your last conclusion unlocked a deeper recovery area.",
        "Return to FILES and look for a newly available recovery/system artifact.",
        "Open manifest.txt in FILES."
      ],
      check: () => has("MANIFEST")
    },
    {
      id: "surveillance",
      title: "Trace Lena's surveillance concerns",
      hints: [
        "Look for evidence from Lena herself and from someone she trusted.",
        "One clue is in browser activity. The other is in a conversation with Mara.",
        "Find WATCHED in browser_history.txt and MARA_THREAD in Messages."
      ],
      check: () => has("WATCHED") && has("MARA_THREAD")
    },
    {
      id: "watch_dir",
      title: "Recover the WATCH directory",
      hints: [
        "The manifest changes what the system is willing to expose.",
        "After reading the manifest, revisit FILES and look for a newly recovered index.",
        "Open index.dat in the WATCH recovery directory."
      ],
      check: () => has("WATCH_INDEX")
    },
    {
      id: "staff",
      title: "Link STAFF_032 across systems",
      hints: [
        "A credential appears in more than one place that should not be connected.",
        "Search the credential, then compare the manifest with the parking log.",
        "Search STAFF_032, then connect MANIFEST + PARKING."
      ],
      check: () => concluded("STAFF032")
    },
    {
      id: "chapter_end",
      title: "Review the final recovered WATCH data",
      hints: [
        "The final reveal is inside the surveillance material, not a separate puzzle.",
        "Read the WATCH index carefully and stay on that artifact long enough to see what changes.",
        "Open index.dat and wait for the recovery event."
      ],
      check: () => state.scares.includes("final_ping")
    }
  ];

  let audioCtx = null;

  function beep(kind="soft") {
    if (!state.audioOn) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;
      const presets = {
        soft: [420, .018, .06],
        key: [680, .01, .025],
        clue: [520, .028, .12],
        warn: [185, .03, .18],
        bad: [120, .035, .22],
        notify: [880, .024, .09]
      };
      const [freq, vol, dur] = presets[kind] || presets.soft;
      osc.type = kind === "warn" || kind === "bad" ? "sine" : "square";
      osc.frequency.setValueAtTime(freq, now);
      if (kind === "warn") osc.frequency.exponentialRampToValueAtTime(150, now + dur);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + .006);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + dur + .02);

      if (kind === "notify") {
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(1175, now + .07);
        gain2.gain.setValueAtTime(.0001, now + .07);
        gain2.gain.exponentialRampToValueAtTime(.016, now + .078);
        gain2.gain.exponentialRampToValueAtTime(.0001, now + .15);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(now + .07);
        osc2.stop(now + .16);
      }
    } catch {}
  }


  function startMainTheme() {
    if (!mainTheme || !state.audioOn) return;
    mainTheme.loop = true;
    mainTheme.volume = 0.28;
    const playPromise = mainTheme.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }

  function stopMainTheme() {
    if (!mainTheme) return;
    mainTheme.pause();
  }

  function currentObjectiveIndex() {
    for (let i = 0; i < objectivesList.length; i++) {
      if (!objectivesList[i].check()) return i;
    }
    return objectivesList.length;
  }

  function refreshObjectiveState(showNotice=true) {
    const before = state.currentObjective ?? 0;
    const now = currentObjectiveIndex();
    state.currentObjective = now;
    state.objectiveStage = Math.min(now, 4);
    if (showNotice && now > before && before < objectivesList.length) {
      beep("clue");
      setTimeout(() => flashBanner(`OBJECTIVE COMPLETE // ${objectivesList[before].title}`, 3600), 150);
    }
    saveState();
    updateChrome();
  }

  function gateMessage(requiredIndex) {
    const current = currentObjectiveIndex();
    if (current < requiredIndex) {
      const o = objectivesList[current];
      flashBanner(`ACCESS LIMITED // complete current objective: ${o.title}`, 4200);
      beep("bad");
      return false;
    }
    return true;
  }

  let state = loadState();
  let timer = null;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

  const bootScreen = $("#bootScreen");
  const bootText = $("#bootText");
  const bootButton = $("#bootButton");
  const game = $("#game");
  const view = $("#view");
  const systemBanner = $("#systemBanner");
  const objective = $("#objective");
  const integrity = $("#integrity");
  const evidenceCount = $("#evidenceCount");
  const modalBackdrop = $("#modalBackdrop");
  const modalTitle = $("#modalTitle");
  const modalBody = $("#modalBody");
  const modalClose = $("#modalClose");
  const mainTheme = $("#mainTheme");

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      return { ...structuredClone(defaultState), ...JSON.parse(raw) };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function setBooted() {
    state.booted = true;
    saveState();
    bootScreen.classList.add("hidden");
    game.classList.remove("hidden");
    startMainTheme();
    if (!game.querySelector(".scanline")) {
      const scan = document.createElement("div");
      scan.className = "scanline";
      game.appendChild(scan);
    }
    startTimer();
    render();
  }

  function bootSequence() {
    if (state.booted) {
      setBooted();
      return;
    }

    const lines = [
      "GREYWATER COUNTY DIGITAL EVIDENCE UNIT",
      "OFFLINE RECOVERY ENVIRONMENT v4.8",
      "",
      "mounting evidence image................. OK",
      "verifying file table.................... 97.4%",
      "recovering deleted index................ PARTIAL",
      "network interfaces...................... DISABLED",
      "",
      "CASE 19-117",
      "SUBJECT: LENA ORTIZ",
      "CLASSIFICATION: VOLUNTARY DISAPPEARANCE",
      "",
      "WARNING: evidence image provenance incomplete."
    ];

    let i = 0;
    const step = () => {
      if (i < lines.length) {
        bootText.textContent += lines[i] + "\n";
        i++;
        setTimeout(step, i < 4 ? 130 : 85);
      } else {
        bootButton.classList.remove("hidden");
      }
    };
    step();
  }

  function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      state.elapsed++;
      const m = String(Math.floor(state.elapsed / 60)).padStart(2, "0");
      const s = String(state.elapsed % 60).padStart(2, "0");
      $("#sessionClock").textContent = `SESSION ${m}:${s}`;
      if (state.elapsed % 10 === 0) saveState();
    }, 1000);
  }

  function markOpened(id) {
    if (!state.opened.includes(id)) state.opened.push(id);
    state.interactionCount++;
    saveState();
    updateProgression();
  }

  function addClue(id) {
    if (!id || state.clues.includes(id)) return;
    state.clues.push(id);
    state.interactionCount++;
    beep("clue");
    state.notificationFlags = state.notificationFlags || {};
    state.notificationFlags.evidence = true;
    flashBanner("EVIDENCE FLAGGED // board updated");
    saveState();
    updateProgression();
  }

  function has(id) { return state.clues.includes(id); }
  function concluded(id) { return state.conclusions.includes(id); }

  function flashBanner(text, ms=2600) {
    systemBanner.textContent = text;
    systemBanner.classList.remove("hidden");
    setTimeout(() => systemBanner.classList.add("hidden"), ms);
  }

  function tinyGlitch() {
    game.classList.add("glitch");
    setTimeout(() => game.classList.remove("glitch"), 700);
  }


  function markNew(section, message) {
    state.notificationFlags = state.notificationFlags || {};
    if (!state.notificationFlags[section]) {
      state.notificationFlags[section] = true;
      beep("notify");
      flashBanner(message || `NEW INFORMATION // ${section.toUpperCase()}`, 3200);
      saveState();
      updateChrome();
    }
  }

  function clearNew(section) {
    state.notificationFlags = state.notificationFlags || {};
    if (state.notificationFlags[section]) {
      state.notificationFlags[section] = false;
      saveState();
      updateChrome();
    }
  }

  function updateProgression() {
    const openedCount = state.opened.length;

    if (openedCount >= 5 && !state.scares.includes("index_change")) {
      state.scares.push("index_change");
      state.integrity = 96.9;
      setTimeout(() => {
        tinyGlitch();
        beep("warn");
        markNew("files", "NEW FILE RECOVERED // FILES updated");
        if (state.view === "files") render();
      }, 900);
    }

    if (state.clues.length >= 6 && !state.scares.includes("read_receipt")) {
      state.scares.push("read_receipt");
      setTimeout(() => {
        tinyGlitch();
        flashBanner("SYSTEM NOTICE // read receipts enabled", 3300);
      }, 1000);
    }

    if (concluded("NOTE_FALSE") && concluded("MOVEMENT_FALSE") && !state.hiddenUnlocked) {
      state.hiddenUnlocked = true;
      setTimeout(() => {
        tinyGlitch();
        markNew("files", "NEW RECOVERY VOLUME // FILES updated");
        render();
      }, 900);
    }

    if (has("MANIFEST") && has("WATCHED") && !state.watchUnlocked) {
      state.watchUnlocked = true;
      setTimeout(() => {
        tinyGlitch();
        markNew("files", "NEW DIRECTORY RECOVERED // WATCH available in FILES");
        render();
      }, 1100);
    }

    if (state.watchUnlocked && openedCount >= 11 && !state.scares.includes("session_seen")) {
      state.scares.push("session_seen");
      setTimeout(() => {
        tinyGlitch();
        beep("warn");
        flashBanner("REMOTE AUDIT ENTRY // session marked as viewed", 5000);
        $("#caseStatus").textContent = "SESSION OBSERVED";
      }, 1400);
    }

    state.objectiveStage =
      state.watchUnlocked ? 4 :
      state.hiddenUnlocked ? 3 :
      state.clues.length >= 4 ? 2 :
      openedCount >= 2 ? 1 : 0;

    saveState();
    refreshObjectiveState(false);
    updateChrome();
  }

  function updateChrome() {
    evidenceCount.textContent = state.clues.length;
    evidenceCount.classList.toggle("new-info", !!(state.notificationFlags || {}).evidence);
    const oi = currentObjectiveIndex();
    const oc = $("#objectiveCount");
    if (oc) oc.textContent = oi >= objectivesList.length ? "✓" : String(oi + 1);
    objective.textContent = oi >= objectivesList.length
      ? "OBJECTIVE: Chapter One complete."
      : `OBJECTIVE ${oi + 1}/${objectivesList.length}: ${objectivesList[oi].title}`;
    integrity.textContent = `IMAGE INTEGRITY: ${state.integrity.toFixed(1)}%`;

    const nf = state.notificationFlags || {};
    $("#briefDot").classList.toggle("on", !state.opened.includes("brief"));
    $("#filesDot").classList.toggle("on", !!nf.files || (state.scares.includes("index_change") && !state.opened.includes("recovered_draft")));
    $("#mailDot").classList.toggle("on", !!nf.mail || !state.opened.includes("mail_mara"));
    $("#messagesDot").classList.toggle("on", !!nf.messages || !state.opened.includes("thread_unknown"));
    const recapDot = $("#recapDot");
    if (recapDot) recapDot.classList.toggle("on", !!nf.recap || (state.scares.includes("final_ping") && !state.recapSeen));

    $$(".nav-button").forEach(btn => btn.classList.toggle("active", btn.dataset.view === state.view));
  }

  function render() {
    updateChrome();
    const handlers = {
      brief: renderBrief,
      objectives: renderObjectives,
      recap: renderRecap,
      files: renderFiles,
      mail: renderMail,
      messages: renderMessages,
      search: renderSearch,
      evidence: renderEvidence,
      notes: renderNotes,
      terminal: renderTerminal
    };
    (handlers[state.view] || renderBrief)();
  }


  function renderObjectives() {
    refreshObjectiveState(false);
    const current = currentObjectiveIndex();

    view.innerHTML = `
      <div class="view-head">
        <div>
          <h2>Investigation Objectives</h2>
          <p>Objectives unlock in sequence. Hints are optional and progressive: Hint 1 nudges, Hint 2 narrows, Hint 3 gives the answer.</p>
        </div>
      </div>
      <div class="objective-shell">
        ${objectivesList.map((o, i) => {
          const done = o.check();
          const cls = done ? "complete" : (i === current ? "current" : "locked");
          const symbol = done ? "✓" : String(i + 1).padStart(2,"0");
          const level = Number(state.hintLevels?.[o.id] || 0);
          const isCurrent = i === current && !done;
          return `<section class="objective-step ${cls}">
            <div class="step-index">${symbol}</div>
            <div>
              <h4>${escapeHtml(o.title)}</h4>
              <p>${done ? "Complete." : (isCurrent ? "Current objective." : "Locked.")}</p>
              ${isCurrent ? `
                <div class="hint-box">
                  ${level > 0 ? `
                    <div class="hint-reveal">
                      <div class="hint-label">${level === 3 ? "ANSWER" : `HINT ${level}/3`}</div>
                      <div>${escapeHtml(o.hints[level - 1])}</div>
                    </div>` : `
                    <div class="hint-empty">Need help? Reveal hints one at a time.</div>`}
                  <button class="small-button hint-button" data-hint-objective="${o.id}" ${level >= 3 ? "disabled" : ""}>
                    ${level === 0 ? "REVEAL HINT 1" : level === 1 ? "REVEAL HINT 2" : level === 2 ? "REVEAL ANSWER" : "ANSWER REVEALED"}
                  </button>
                </div>` : ""}
            </div>
          </section>`;
        }).join("")}
      </div>`;

    $$("[data-hint-objective]", view).forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.hintObjective;
        const currentLevel = Number(state.hintLevels?.[id] || 0);
        state.hintLevels = state.hintLevels || {};
        state.hintLevels[id] = Math.min(3, currentLevel + 1);
        saveState();
        beep(currentLevel >= 1 ? "soft" : "key");
        renderObjectives();
      });
    });
  }


  function renderRecap() {
    const complete = state.scares.includes("final_ping");
    const recapDot = $("#recapDot");
    if (recapDot) recapDot.classList.toggle("on", complete && !state.recapSeen);

    if (!complete) {
      view.innerHTML = `
        <div class="view-head">
          <div>
            <h2>Chapter Recap</h2>
            <p>Finish Chapter One first.</p>
          </div>
        </div>
        <section class="card locked-recap">
          <h3>RECAP LOCKED</h3>
          <p class="muted">Keep investigating.</p>
        </section>`;
      return;
    }

    state.recapSeen = true;
    clearNew("recap");
    saveState();

    view.innerHTML = `
      <div class="view-head">
        <div>
          <h2>Chapter One Recap</h2>
          <p>What you found. What it means is up to you.</p>
        </div>
      </div>

      <section class="recap-hero card">
        <div class="recap-kicker">CASE 19-117 // CHAPTER ONE COMPLETE</div>
        <h3>Lena Ortiz — November 17, 2019</h3>
        <p>The case was closed as a voluntary disappearance.</p>
      </section>

      <div class="recap-grid">
        <section class="card">
          <h3>The note</h3>
          <p>A handwritten note said Lena needed to disappear for a while.</p>
          <p>A recovered draft, written before she vanished, said:</p>
          <p><strong>“If I don't show up tomorrow, don't trust the note.”</strong></p>
        </section>

        <section class="card">
          <h3>The car</h3>
          <p>Lena's car entered the Park & Ride at 6:42 PM.</p>
          <p>It left after midnight using a <strong>manual staff override.</strong></p>
        </section>

        <section class="card">
          <h3>Briar County</h3>
          <p>Her card was used the next morning.</p>
          <p>The transaction was processed by magnetic stripe with no cardholder verification.</p>
        </section>

        <section class="card">
          <h3>Before she disappeared</h3>
          <p>Lena searched:</p>
          <p><strong>“how to know if someone has remote access to laptop”</strong></p>
          <p><strong>“webcam light turns on by itself”</strong></p>
        </section>

        <section class="card">
          <h3>The archive</h3>
          <p>The evidence image was created in January 2020.</p>
          <p>It was assembled from four sources.</p>
          <p>One source is listed only as <strong>UNKNOWN_VOLUME_03</strong>.</p>
        </section>

        <section class="card">
          <h3>STAFF_032</h3>
          <p>The ID appears in the parking log.</p>
          <p>It also appears as the operator ID on the evidence-image manifest.</p>
        </section>

        <section class="card">
          <h3>WATCH</h3>
          <p>The recovered directory contains six names.</p>
          <p>Its modules include screen capture, camera probing, browser mirroring, and message export.</p>
        </section>

        <section class="card recap-danger">
          <h3>Last thing you saw</h3>
          <p>The WATCH index changed while you were viewing it.</p>
          <p class="mono">last_viewed: THIS SESSION</p>
        </section>
      </div>

      <section class="card recap-open">
        <div class="recap-kicker">OPEN QUESTIONS</div>
        <div class="unknown-grid">
          <span>Who used STAFF_032?</span>
          <span>Who wrote the note?</span>
          <span>Who had Lena's car?</span>
          <span>Why was she in WATCH?</span>
          <span>Who are the other names?</span>
          <span>Where is Lena?</span>
        </div>