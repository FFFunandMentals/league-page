<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <p style="text-align: center;"><u><span style="font-size:20pt;font-family:Arial,sans-serif;">Dynasty League Constitution &amp; Rules</span></u></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.q91v7vreqjxn"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.0 Draft</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.5nw6xmlzd98u"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.1 Inaugural Draft</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.w9v4qzk5qib5"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.2 Rookie Supplemental Drafts</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.czl5kvt9vix7"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.3 Draft Pick Order</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.wtpfzeydepyj"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.4 Inability to Attend a Draft</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.82s19vgf0g28"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">1.5 In-Draft Transactions</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.8uyoi29i5jjx"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">2.0 Scoring</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.otr10n1gminh"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">2.1 Scoring Settings</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.cinnhy6fy22z"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">2.2 Scoring Changes</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.3rliuhm8fs27"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">2.3 Divisions&nbsp;</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.uco22avm19mg"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">2.4 League Median</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.pbqul6xppd65"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">3.0 Roster</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.df618fawy63h"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">3.1 Roster Construction</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.5cb4jwewfr38"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">3.2 Injured Reserve</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.w380emrhbali"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">3.3 Taxi Squads</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.90p8vy56vegv"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">3.4 Roster Limits</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.hhbzduebref8"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">4.0 Player Acquisitions</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.8mv2j8121b5z"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">4.1 Waivers</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.3e1our8d043v"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">4.2 Trades</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.ps32ckbenvnf"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.0 Team Management</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.jl17whq45ajt"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.1 Temporary Team Management</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.pjnujhhnbejj"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.2 Prolonged Unexpected Absence</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.epjkjobb3how"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.3 Team Abandonment</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.9po9q1wy983v"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.4 &ldquo;Member Replacement Rule&rdquo;</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.amkeklxqtm6f"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.5 Backup Managers</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.v17rpquy079e"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">5.6 Technical Issues</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.7oohchhgas75"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.0 League Management</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.2srj9a8362uu"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.1 League Expansion</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.syuqhfpk6nns"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.2 League Votes &amp; Web Polls</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.gaqrnly34udc"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.3 Tie Breaking Procedures</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.13n0lnoyixgn"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.4 Commissioners</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.ecb56ei2gh3h"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.5 Rule Changes or Edits to the &ldquo;Charter&rdquo;</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.sctxif6hf4vl"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">6.6 Additional League Setup Information</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.5dhlj1gqp98h"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">7.0 Playoff Structure</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.5pw52oqbe7lt"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">7.1 Playoff Eligibility</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.yl56j3ofcd2s"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">7.2 Playoff Format</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.ftf6qnn27aqw"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">8.0 End of Season Procedures</span></u></strong></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.bs2deqepsca8"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">9.0 Buy-Ins &amp; Payouts</span></u></strong></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.bqlgks1xdgy"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">10.0 Fair Play &amp; Conduct</span></u></strong></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.66nqwwdofe5x"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">10.1 Collusion</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.1i51gjle4npu"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">10.2 Roster Dumping</span></u></a></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.8g7cumne1zhe"><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">10.3 League Discipline</span></u></a></p>
<p><br></p>
<p><a href="https://docs.google.com/document/d/1SbtLqn4ZbP1QLo_aNUMkg5zzrne6smJa_IJP7LuBuRM/edit?tab=t.0#bookmark=id.cn7amxthk5sy"><strong><u><span style="color:#1155cc;font-size:11pt;font-family:Arial,sans-serif;">11.0 Key Dates</span></u></strong></a></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p style="text-align: center;"><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">1.0 Draft</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">1.1 Inaugural Draft</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Inaugural draft will be a snake draft with a third round reversal.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The draft will begin once all league members join and pay the year one buy in ($50)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The draft order will be randomized in Sleeper by the commissioner one week before the draft.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">2025 rookies will be included in the inaugural draft pool of players.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Auto-pick will be disabled unless specifically requested by a manager</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">1.2 Rookie Supplemental Drafts</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Rookie supplemental drafts will be held annually and will start the Friday after the NFL draft.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The rookie draft will be linear.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Draft will be held on Sleeper and will follow their &ldquo;Slow Draft Timer&rdquo; process.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">(A &ldquo;Slow Draft Timer&rdquo; means that a manager will have 8 hours to draft their player selection.)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Rookie Drafts will be limited to 4 total rounds</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Commissioners will have &ldquo;CPU Auto-Pick&rdquo; turned off, which will prompt a &ldquo;Time&rsquo;s Up&rdquo; message, but will not forcibly make the pick for the team that is on the clock. A placeholder pick will be assigned and the draft will continue until the manager who hit the time limit makes his pick, first-come-first-serve against the manager currently on the clock. The clock will pause between midnight and 10am. This will allow for the draft to continue overnight without the risk of the pick deadline being enforced &ldquo;after hours&rdquo;.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Compensatory picks will be awarded to the winner of the 5th place playoff matchup (end 3rd), as well as the winner of the consolation bracket (end 2nd).</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">All free agents including undrafted rookies will go to waivers post-draft</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">1.3 Rookie Draft Pick Order</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Draft pick order will be determined by the inverse of max PF for non-playoff teams (i.e. team with the lowest max points for will have the first pick). For playoff teams, the order will be the inverse of playoff outcome (i.e. league champion will have the last pick of each round).</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Comp picks may be traded with the approval of both commissioners. This measure is only in place to make keeping track easier for the commish.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Comp picks will be stationed at the end of the 2nd and 3rd rounds of rookie drafts</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The draft will be paused and comp picks will be sent to the commissioner, who will then assign the pick to the 5th round. Draft will then resume.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">1.4 Inability to Attend a Draft</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If a team is unable to attend a draft they will have the following options:</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">They will be allowed to participate in the draft via auto-draft functionality native to the drafting program.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">They will be allowed to designate their backup manager to draft on their behalf.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Given that our drafts are currently slow drafts, managers should have adequate time to set their draft queue in the event they are unavailable during their draft window.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">1.5 In-Draft Transactions</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Trades during the draft involving current picks can be challenged by any manager. The draft will be paused until the commissioners reach a satisfactory solution.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The pick clock will either resume or be reset at the commissioners&rsquo; discretion.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">2.0 League scoring</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">2.1 Scoring Settings</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Standard Sleeper full PPR. See scoring settings in the app. All scoring changes are logged by the app.</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">2.2 Scoring Changes</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">No scoring settings may be updated during the season except by unanimous decision.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Proposals to the settings and league votes may only occur during the offseason.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Proposals are passed with either 8/10 majority or 7/10 with both commissioners in favor.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">2.3 Divisions</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Managers will be split into 4 divisions of 3 teams each at the discretion of the commissioners. Divisions cannot be altered in-season. Teams sharing the same division will face each other twice per regular season.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Managers will be assigned one rival from outside their division who they will also face two times.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">2.4 League Median</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Teams&rsquo; records will reflect both their W/L record against their record against the weekly league median. This is to offset week-to-week luck and encourage sound roster construction.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">3.0 Roster</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">3.1 Roster Construction</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Each manager will have the following roster slots available for their team:</span></p>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Starting lineup:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">QB</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">RB</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">RB</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">WR</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">WR</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">TE</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">RB/WR/TE</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">RB/WR/TE</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">RB/WR/TE</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">QB/RB/WR/TE &nbsp;(Superflex)</span></p>
    </li>
</ul>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Bench:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">20 bench slots</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">3 IR slots</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">4 taxi slots</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">3.2 Injured Reserve</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Each team will have access to 3 IR slots on their roster.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">A player is eligible for IR if they are labeled as PUP or IR, or Covid-19 designation but let&rsquo;s be real.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">These statuses, or tags, can change throughout any given week during a regular season based on Sleeper designation.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">3.3 Taxi Squads</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Taxi Squads contain up to 4 total players.&nbsp;</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Taxi Squad is limited to players with a maximum of 1 years NFL experience at the start of the season. This means that only rookies and 2nd year players can be on your Taxi Squad.&nbsp;</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">3rd year players on your Taxi Squad would result in an ineligible lineup and would need to be either dropped or moved onto your roster.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Taxi Squad deadline is set to the start of the NFL&rsquo;s regular season.&nbsp;</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Note</span></em></strong><em><span style="font-size:11pt;font-family:Arial,sans-serif;">:&nbsp;</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Once the Taxi Squad is locked, you may not add ANY player back to the Taxi Squad.&nbsp;</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">3.4 Roster Limits</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Managers can exceed the roster limits but will be subject to the following rules from Sleeper:</span></p>
    </li>
</ul>
<p><br></p>
<p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">&ldquo; On Sleeper, you can always draft or trade over the roster limit!</span></p>
<p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">If you have three open spots on your bench heading into your rookie draft, but you have 5 picks, don&apos;t worry. You can still draft 5 players, but you will just have to cut down to meet the roster limit before your roster is eligible.</span></p>
<p><br></p>
<p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">When a team is over the roster limit they&nbsp;</span><strong><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">CAN</span></strong><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">:</span></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Draft&nbsp;</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Drop players</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Trade</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Accumulate points</span></p>
    </li>
</ul>
<p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">When a team is over the roster limit they&nbsp;</span><strong><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">CANNOT:</span></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Add Free Agents</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">Edit their starting lineup</span></p>
    </li>
</ul>
<p><span style="background-color:#efefef;font-size:11pt;font-family:Arial,sans-serif;">A team owner does not have to be at or under the roster limit in order to gain points toward a matchup. They will not be able to adjust the lineup, so it would be locked.&nbsp;</span></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">4.0 Player Acquisition</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">4.1 Waivers</span></u></strong></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The league will utilize a FAAB (Free Agent Acquisition Budget) system for player acquisition for players that have been subject to the waiver system.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Separate FAAB budgets will be assigned for Regular Season and Offseason, and are reset at the start of each of those periods</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Each team will start the inaugural season with $100 of FAAB.</span></p>
    </li>
</ul>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">During the regular season:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Players are on Waivers for 2 days after being dropped. (&ldquo;Tue After Game&rdquo; setting on sleeper)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">After the weekly games have been played, Waivers clear daily at 12:00pm Eastern Time.</span></p>
    </li>
</ul>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">During the offseason:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Daily waivers are enabled. This prevents managers from getting players based on being the first to see news drop (i.e. player trades, signings, etc.). This also prevents players from picking up rookies right after the rookie draft</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">4.2 Trades</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Once a trade has been accepted by all parties, it will be processed instantly.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If any league member has concerns over a trade made by another manager, they may initiate a poll via League Chat in Sleeper.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">All trades are potentially subject to commissioner and/or league reviews for fairness and potential collusion.</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In general, expect most trades will be compared against popular trade calculators (KeepTradeCut, DynastyDaddy, FantasyPros). If your trade is way off compared to those resources, be prepared to defend it. Unbalanced trades&nbsp;</span><em><span style="font-size:11pt;font-family:Arial,sans-serif;">are</span></em><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;ultimately a part of dynasty, and we want to be able to trust all members equally</span></p>
            </li>
        </ul>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Trades made at or around weekly kickoff are NOT safe from being reversed. Players returned to sender will not be placed back into lineups. Trade around kickoff at your own peril.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Sleeper does allow the possibility of multi-team trades. Bragging rights for the first trio+ to make it work.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The trade deadline is the start of week 15 (start of playoffs).</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If a league member trades a draft pick from a future season, they will have to pay the buy-in up through the year of that pick&rsquo;s draft. For example, if it&rsquo;s currently the 2025 season and a 2027 draft pick is traded, buy-ins for the 2025, 2026 and 2027 years would have to be paid in order for the trade to proceed. This money is not returned in the event of a manager leaving, but counts for the replacement manager&rsquo;s buy-in.</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Future buy-ins are returned only in the event of league folding.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">5.0 Team Management</span></u></strong></p>
<p><br></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">(This section is hopefully never necessary but it came with the doc so it can&rsquo;t hurt to leave in. In general, feel free to work with a commish regarding extended absence.)</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.1 Temporary Team Management (Planned Absence)</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In the event of a known absence, the absent franchise may elect a &ldquo;backup manager&rdquo; to set their lineups for them.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">No roster changes may be made on the managed team&rsquo;s behalf. (Only lineup adjustments)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If a manager is managing another team&rsquo;s roster, the commissioners need to be notified prior to the scheduled absence.</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Option 1: Commissioners are notified and login information is shared to the backup manager.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Option 2: Commissioners are notified and backup managers submit lineup changes to the commissioners to make the adjustments on their behalf. Editorially, this is the commish&rsquo;s preferred solution.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If commissioners are not notified of any temporary team management, commissioners will not be responsible for roster status or any changes made to that roster during the temporary management. Excuses will be judged by the commissioner.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">&ldquo;Backup managers&rdquo; may be any individual the team chooses, as long as their contact information is shared to the commissioners.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.2 Prolonged Unexpected Absence:&nbsp;</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If the prolonged absence would make the manager incapable of managing their team, their predefined &ldquo;backup manager&rdquo; (if applicable) will manage their roster until the end of the season</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">After the conclusion of the season, their team will be subject to the &ldquo;Member Replacement Rule&rdquo; rules if they are deemed to be incapable of continuing the control of their team as subject to league vote.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.3 Team Abandonment</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If a manager &ldquo;abandons&rdquo; his/her team, they will be subject to a league vote to confirm abandonment.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If abandonment is confirmed, their backup manager will assume responsibility for their team.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If their backup manager doesn&rsquo;t assume responsibility of their team, league commissioners will assume responsibility of their team until the manager is replaced. The abandoned team will then be subject to the &ldquo;Member Replacement Rule.&rdquo;</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If an owner voluntarily quits the league, their team will be deemed abandoned.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.4 &ldquo;Member Replacement Rule&rdquo;</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If an owner needs to be replaced, it is both the league&rsquo;s and commissioner&rsquo;s responsibilities to find a replacement owner to take over the team.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In the event we have multiple candidates, potential owners will be subject to a league vote for confirmation of team acquisition.</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If the commissioner deems it necessary, a wait list will be implemented, but frankly it was hard enough to find this many sickos so let&rsquo;s keep it together.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.5 Backup Managers</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Backup managers are optional until further notice.</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">5.6 Technical Issues</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;</span><span style="font-size:11pt;font-family:Arial,sans-serif;">The Sleeper app is our personal favorite of the major fantasy platforms. However, the app is still temperamental on its best days and is known to get particularly wonky on gameday, especially early in the season. If you trade for Jamar Chase but the app doesn&rsquo;t recognize your attempt to start him over Kayshon Boutte, let a commish know in a timely manner and we will make the change if it seems like an honest mistake. The more obvious the discrepancy in player talent, the more likely the swap will be made. Preferential treatment will be given for active managers. Conversely, cases involving injured/questionable players will be heavily scrutinized.</span></p>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">6.0 League Management</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.1 League expansion</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">If the majority of the league members votes to expand the amount of teams in the league, we would then conduct a series of league votes to determine the process for league expansion.</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.2 League Votes &amp; Web Polls</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Polls will be conducted in Discord in the Announcements channel or sleeper chat.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Polls conducted during the offseason will allow for a 2 weeks default timespan to vote.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Polls conducted within the standard NFL season will allow for a 1 week default timespan.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any polls that require additional urgency will be conducted in a timeframe and method that is determined by the league commissioners.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Majority votes will be defined as 8/12 members, or 7/12 with both commissioners.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.3 Tie Breaking Procedures</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">See above.</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.4 Commissioners</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">There will be 2 commissioners for the league to maintain checks and balances.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In the event that a commissioner leaves the league, the remaining league members will nominate and vote for a replacement commissioner via Discord or sleeper poll.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In the event that both commissioners leave the league, the remaining managers will elect a single commissioner to review and modify the current league charter as they see fit to continue the league if it&rsquo;s determined to do so.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.5 Rule Changes or Edits to the &ldquo;Charter&rdquo;</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">During each offseason, any member can propose potential rule changes to the charter that would be voted on by league members via poll.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Rule changes would go into effect if a majority of the members vote in favor of the proposed change.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">In the event of unforeseen changes within the NFL landscape, league rules may be modified in-season by a majority vote.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any vote that fails to reach the above threshold of votes results in a no-change to the proposed change.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">6.6 Additional League Setup Information</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Inaugural league setup will consist of 12 teams per Sleeper&rsquo;s suggestions.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Hosting site - Sleeper</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">7.0 Playoff Structure</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">7.1 Playoff Eligibility</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">At the conclusion of Week 14, 6 teams ranked as seeds will be determined to be playoff eligible:</span></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The winner of each division will automatically be playoff eligible, and will be arranged into seeds 1 through 4 based on the following tiebreaker hierarchy:</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Overall record</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Points For</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Points Against</span></p>
            </li>
        </ul>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The final two seeds (the &ldquo;wildcards&rdquo;) will be the decided from the remaining pool of teams by the same tiebreaker</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">We will have the &ldquo;Re-Seed&rdquo; option selected in Sleeper Commissioner settings.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">7.2 Playoff Format</span></u></strong></p>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 15:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">1&amp;2 seeds bye</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">3v6 &amp; 4v5</span></p>
    </li>
</ul>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 16:</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">1 seed vs lowest remaining seed from week 15 games played.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">2 seed vs highest remaining seed from week 15 games played.</span></p>
    </li>
</ul>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 17</span></em></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Championship game.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Winners from week 16 games will play head-to-head.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">8.0 End of Season Procedures&nbsp;</span></u></strong></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Once the league&rsquo;s championship comes to an end, we have officially reached the &ldquo;offseason&rdquo;.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Commissioners will transition the league to the next year within 7 days following the Super Bowl.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any moves made following the fantasy league championship will NOT carry over when the league transitions to the new season (We must transition first and then make the desired moves).</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">When the league transitions to the new year, commissioners will enable the &ldquo;Lock all free agent and waiver moves&rdquo; option under league settings. Managers will be unable to pick up players at this time but can still make trades (players, picks, or FAAB) and drop players. Trading will be opened to all teams.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">We will remain in this state of &ldquo;Locked Free Agents and Waiver Moves&rdquo; until the end of the Rookie Draft.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The &ldquo;Allow Moves Pre Draft&rdquo; setting in Sleeper will be enabled.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">At the time of the new league year transition, commissioners will also manually reset every team&rsquo;s FAAB budget to $100.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Each team maintains 100% of their roster going into the start of the next season.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">9.0 Buy-Ins &amp; Payouts</span></u></strong></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Yearly buy-in is $50 and is due before a given season&rsquo;s rookie draft. Draft will be delayed if any teams remain unpaid without valid reason under the judgement of the commish.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">All collected dues will be recorded in the League Dues Spreadsheet</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Each transaction will be logged in the spreadsheet and verified by both commissioners</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Payout structure:</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Champion: $350 &amp; any associated trophy</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">2nd: $100</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">3rd: $50</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Division winners: $25</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">10.0 Fair Play &amp; Conduct</span></u></strong></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">10.1 Collusion</span></u></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Collusion is defined by but not limited by the following examples:</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">One team makes moves to benefit another team, without trying to improve its own position.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Completely one-sided trades.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Dropping a player in such a way that another predetermined team can pick up that player</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any sort of cooperation or compensation outside of the fantasy football program (e.g. cash, favors, etc.)</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">More at the discretion of the commissioners</span></p>
            </li>
        </ul>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any manager that feels like collusion is in place may protest the action by contacting a commissioner or by posting in the fantasy football group chat. The action in question will be subject to a league-wide vote to collectively determine if collusion has occurred.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Commissioners reserve the right to pause or reverse transactions that are subject to a collusion vote up to the commissioner&rsquo;s discretion. Are you worried your trade might be considered collusion? Trust that instinct.</span></p>
    </li>
</ul>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">10.2 Roster Dumping</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Team managers that are found to have dumped their players to the player pool in an attempt to undermine the league may be subject to league discipline.</span></p>
<p><br></p>
<p><strong><u><span style="font-size:11pt;font-family:Arial,sans-serif;">10.3 League Discipline</span></u></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">If at any time an owner violates league rules or engages in conduct judged by the Commissioners as detrimental to the league in any way, the Commissioners have both the authority and obligation to act to protect the league and to act in its best interests. The Commissioners may impose sanctions against an owner or team found to have violated league rules or conducted themselves in a manner detrimental to the league. It is expected that the Commissioner&apos;s use of sanctions will be rare, appropriate to the offense, proportionate to its severity, and not undertaken lightly. Commissioner&apos;s sanctions include but are not limited to the following:</span></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Public warning</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Deductions from overall and divisional point totals</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Retroactive cancellation of trades, with the possibility of forfeits declared for any games affected by the canceled trade</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Suspension of blind bidding (FAAB) rights for a specified period</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Suspension of trading rights for a specified period</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Suspension or benching of players for a specified period</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Suspension of chat room privileges for a specified period</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Suspension of an owner or co-owners for a specified period, with their team forfeiting all games occurring during the suspension Forced waiving of players</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Loss of future draft choices</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Removal of an owner or co-owners from the league</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Any combination of the above sanctions deemed appropriate by the Commissioners.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The Commissioners may impose and enforce sanctions at any time, including retroactively, by the Commissioner. The Commissioner may use an owner&rsquo;s past record in considering the length or severity of sanctions.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><em><span style="font-size:11pt;font-family:Arial,sans-serif;">Note:</span></em></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Because of the inability to include all possible scenarios in these rules, the commissioners will assume the governing position for the league. If any issues or suggestions come up, the commissioners will determine the correct course of action, gain the approval of the majority of the league, and consequently enforce whatever action is necessary to maintain fair, fun, and honest play.</span></p>
<p><strong><u><span style="font-size:20pt;font-family:Arial,sans-serif;">11.0 Key Dates:</span></u></strong></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Rookie supplemental drafts will be held annually and will start the first Friday after the NFL draft.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Draft Day - At the start of the draft, commissioners will disable the &ldquo;lock all free agent &amp; waiver moves&rdquo; option in the sleeper settings. This will allow us to enter &ldquo;Free Agency&rdquo; immediately following the draft. (FAAB or other waiver processes aren&rsquo;t initiated until after week 1)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 15 - Playoffs Start (Top 2 teams have bye weeks)</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 16 - 2nd Round Playoffs</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Week 17 - Championship game.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">The day after the Superbowl, commissioners will enable the &ldquo;lock all free agent &amp; waiver moves&rdquo; option on Sleeper.com under the commissioner settings.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
<p><br></p>
<div style="bottom: 10px; right: 10px; position: absolute;"><a href="https://signatureforemail.com/?utm_source=wth_free_link&utm_medium=external" target="_blank" style="font-size:11px; color: #d0d0d0;">HTML Email Signature Tool</a></p>
</div>
