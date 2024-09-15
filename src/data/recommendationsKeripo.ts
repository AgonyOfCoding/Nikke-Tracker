import { CubeName, RecommendationsKeripo } from "../types";

export const recommendation_data_keripo: {[nikke: string]: RecommendationsKeripo} = {
    "scarlet": {
        tier: "S+",
        role: "Hypercarry",
        skills: "10/10/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "AoE nuke Burst. Pair with Jackal and XAnne/Blanc. Hard countered by Noah. Soft countered by Noise or Moran",
        full: ["Just like in PvE, Scarlet is an extremely strong DPS hypercarry in PvP due to her S1 attack self-buff and her strong Burst which can 1-shot wipe the entire enemy team and immediately end the fight. Her S2 counterattack also sees usage in PvP as bonus damage and also extra burst gen (0.45% per counterattack), which is especially strong when linked with Jackal. In fact, one of the strongest meta team comps right now in the game is the Jackal-Scarlet combo. She can be hardcountered by Noah Burst's team-wide invuln so it is advised that you put Scarlet in a high burst gen team. Make sure to also give her Bastion and roll max ammo lines on her OL so she can continue attacking as long as possible without needing to pause and reload. She is also soft countered by Noise Burst's team-wide max HP buff and Moran's team-wide damage reduction buff, so it is advices you put a buffer (XAnne, Blanc, etc.) in your team, especially when in lvl 281+ synchro fights."]
    }, "noah": {
        tier: "S+",
        role: "Taunt+ Shielder",
        skills: "-/-/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "3s team-wide invuln. Hard counter to Scarlet/2B/Maiden. High burst gen",
        full: ["Noah is a utility unit whose whole gimmick is being the \"strongest shield\". And she does this very well by taunting with her auto attacks as well as with her Burst, which also gives the entire team 3s invuln and 10s of def buff. This 3s invuln is extremely important as it is a hard counter to AoE 1 shot units like Scarlet and 2B, as well as of course buying your team 3 valuable seconds of safety during the dangerous Full Burst window. Her skill level investments isn't as important as her gear and core investment to give her that bulk needed for tanking; lucky she is the one Pilgrim that you can get tokens for from the ticket exchange shop (and I highly recommend you do this exchange).","Update: As of the 7/24 patch, a bug in Noah's auto-attacks was fixed and she now generates double the burst gen of RLs, putting her just under clip RLs but above clip SGs."]
    }, "anis_sparkling_summer": {
        tier: "S+",
        role: "Hypercarry",
        skills: "10/10/9",
        cube: [CubeName.Resilience],
        tl_dr: "Crazy DPS to 2 highest ATK during Full Burst. Pair with Biscuit. Avoid max ammo. Countered by Scarlet-Jackal.",
        full: ["SAnis is an extremely strong DPS hypercarry in PvP due to her S2 attack doing massive amounts of damage to the two highest atk units on the enemy team (e.g. usually the biggest threats). Because her skill hits 2 different targets throughout the entire duration of Full Burst, she works around teams that taunt or use Noah (do note that if taunted, one of the 2 attacks will go to the taunter). By leveling her Burst to lvl 9, she reduces her max ammo to 1, which triggers her S2 attack non stop (equip the Resilience cube on her for even faster spam). As a Supporter, her base HP and DEF are also higher than others so she has pretty good survivability despite being a DPS role. SAnis pairs very well with Biscuit whose Burst gives SAnis a huge attack boost as well as self heals. Just be careful not to roll Max Ammo lines on her OL and don't include ammo up units like Noir or Sugar in her team. One weakness SAnis has though is that she is a SG, so she can be easily countered by a properly positioned Scarlet with strong S2 counterattacks as SAnis (like any other SG) will just end up suiciding against Scarlet. This gets amplified if the enemy team is also running Jackal."]
    }, "jackal": {
        tier: "S+",
        role: "Burst Gen + Buffer",
        skills: "-/-/-",
        cube: [CubeName.Quantum, CubeName.Adjutant],
        tl_dr: "Crazy burst gen. Pair with Scarlet. Position linked units in P1/2/5.",
        full: ["Jackal is a crazily strong unit due to her S2 buff which damage links Jackal with the two highest atk units on your team. This means that each time any of those 3 units get hit, the damage is split 3 ways to all 3 units. This split will trigger any on-hit effect, such as Emma's S1 heal, Scarlet's S2 counterattack, and even Jackal's own S1 debuff. On-hit effects that damage/debuff enemy targets will also generate additional burst gen for your team (Jackal's S1 generates 3.55%). Adding this to Jackal's already crazy high burst gen results in making it very easy to build 2RL/2.5RL teams with Jackal. The most popular team comp involves pairing Jackal with Scarlet, with Jackal-Scarlet comps often being the most popular Rookie Arena setup. One thing to note is that Jackal's S2 buff can be stripped away by Rosanna's S1. Regardless of who you choose to pair her with, make sure to calculate the starting attack values of all your team members (include OL atk% lines) and place them in P1, P2 and P5 positions."]
    }, "biscuit": {
        tier: "S+",
        role: "Buffer + Healer",
        skills: "-/7/7*",
        cube: [CubeName.Adjutant],
        tl_dr: "Invulns Defenders. Buffs Supporters. Pair with SAnis.",
        full: ["Biscuit is a very strong utility unit whose S2 passive grants 5 seconds of invulnerability to any defender on your team below 50% HP. This passive enables a bunch of very strong stall-based team comps by giving taunting Defender units like Noah, Makima, and Ludmilla a second lifeline. 5 seconds of invulnerability can drastically change the fight, especially considering that most fights only last 10-15 seconds. If her S2 is leveled high enough, the heal aspect of the passive might push that defender back above 50%, allowing the buff to apply to them a second time (for a total of 10s of invuln!!!) In addition, her Burst also gives Supporter units a very strong attack buff and self heal buff. This pairs extremely well with SAnis, so you will often see the Biscuit-SAnis combo used in SP Arena.","*Note: Only level Biscuit's Burst if you run her with SAnis"]
    }, "emilia": {
        tier: "S",
        role: "Burst Gen + AoE DPS + Slow Nuke",
        skills: "10/10/10*",
        cube: [CubeName.Adjutant, CubeName.Quantum],
        tl_dr: "Crazy burst gen. Wide-range AoE auto attacks (usable as off-DPS). Delayed AoE burst for use against Noah on atk.",
        full: ["Emilia has crazy level of burst gen due to her expanded explosion radius allowing her rockets to hit 3 targets instead of 2, and her S2 skill which adds in an additional hit on each of the targets. In addition, with additional charge speed from OL lines and Adjutant cube, it is possible for her to become an even crazier burst gen battery; with S1 at lvl 10 and 8% additional charge speed, Emilia is able to fire off 3 rockets in 2.5RL time (second line), and with S1 at lvl 10 and 24.7% additional charge speed, Emilia is able to fire off 3 rockets in 2RL time (3rd line). Due to her also being an attacker and her S2's high 60% bonus damage, these high burst gauge generating shots also do a decent amount of damage to targets hit, allowing Emilia to also serve the role of an off-DPS.","* In addition to being a top tier DPS, Emilia can also be used on attack in certain circumstances. Her burst will hit all 5 targets and effectively act as an AoE nuke capable of 1-shotting the entire enemy team (with one buffer) but takes 3-4s to charge up, meaning she needs protection during that chargeup time (e.g. via Noah or via Blanc). This delayed nuke, however, can be used to circumvent the 3s invuln buff from the enemy Noah team. Note that as a projectile, Emilia's buff can still whiff, so this is not a reliable setup."]
    }, "ein": {
        tier: "S-",
        role: "Hypercarry",
        skills: "10/10/10",
        cube: [CubeName.Bastion, CubeName.Adjutant],
        tl_dr: "AoE nuker as well as continuous DPS to entire enemy team during Full Burst",
        full: ["Ein is multi-facet DPS hypercarry who has both an AoE nuke as well as continous damage followup DPS during the full burst. Her Burst's AoE nuke aspect is slightly delayed but, as a result, includes the 1.5x Full Burst multiplier, meaning it has the potential to 1-shot the enemy team if give two buffers. Even if the nuke fails to 1-shot, her Feathers will continually attack the entire enemy team throughout the entire Full Burst duration, allowing her to circumvent Noah or Biscuit-invulns. Her Feathers can be taunted, however, so she will ideally need two buffers to ensure she has enough firepower to brute force through any opponent tank and still kill the entire enemy team before her Blanc/etc. buff expires. She does not have any hard counters, but she can get soft countered by an enemy Noah-Biscuit combo (which will block her AoE nuke then taunt all her Feathers)"]
    }, "noise": {
        tier: "S-",
        role: "Taunter + Healer",
        skills: "-/4/7",
        cube: [CubeName.Vigor, CubeName.Healing],
        tl_dr: "Taunts + crazy heals. Soft counter to Scarlet/2B/Maiden",
        full: ["Since launch, Noise has been nerfed twice already for healing herself and the team way too much, but even after her nerfs, she is still an extremely strong meta unit whose auto attacks taunt and whose Burst gives the entire team a huge max HP buff that allows them to possibly survive Scarlet/2B/Maiden nukes and gives some decent continual heals throughout Full Burst. Being a B1 with ok burst gen, she can easily fit into pretty much any team, making her a premium B1 pick despite the multiple nerfs"]
    }, "anis": {
        tier: "S-",
        role: "Burst Gen",
        skills: "-/-/-",
        cube: [CubeName.Quantum, CubeName.Adjutant],
        tl_dr: "Crazy burst gen",
        full: ["Even though Anis is a purple SR unit, her crazy level of burst gen makes her extremely powerful in a current meta that involves bursting as fast as you can. Outside of her burst, she doesn't really add any utility to the team. Just make sure to put her in the middle of your team cause she will otherwise die very fast due to her low base stats."]
    }, "centi": {
        tier: "S-",
        role: "Burst Gen + Debuffer + Shielder",
        skills: "-/-/-",
        cube: [CubeName.Quantum, CubeName.Adjutant],
        tl_dr: "Crazy burst gen",
        full: ["Like Anis, Centi is also has crazy level of burst gen and can fit into any team as a battery. Her skills do offer a bit of benefit to the team but they are minimal. Do note that Centi's shield pops a bit too late into fights to make much of a difference and gets shredded through way too fast to really benefit the fight."]
    }, "rapunzel": {
        tier: "S-",
        role: "Healer + Revive",
        skills: "7/-/4",
        cube: [CubeName.Healing, CubeName.Vigor],
        tl_dr: "Heals + rez",
        full: ["Rapunzel is one of the two units right now who has the ability to resurrect a fallen team-member, which is extremely valuable in PvP. The resurrected team member can also immediately burst and continue the burst chain. Even if no one is dead at the time of burst, Rapunzel's Burst still heals the team for a very decent amount and her auto-attacks also help passively heal. Overall a solid unit to put into any team."]
    }, "moran": {
        tier: "A+",
        role: "Taunt +Buffer",
        skills: "4/7/10",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Taunt + team-wide damage reduction buff. Soft counter to Scarlet/2B/Maiden. Pair with Biscuit for invuln.",
        full: ["Moran is a premium B1 defender with a lot of survivability. Her burst AoE taunts as well as gives the entire team an amazing damage reduction buff, which can effectively negate one of your opponent's attack buffs (e.g. Liter/XAnne/XMica) or damage taken increase buffs (e.g. Blanc). This allows your team to avoid being 1-shot by most AoE Burst nukes such as from Scarlet, 2B, or Maiden. She serves a similar role as Noise in this case but does it in a different way (e.g. reduce damage taken vs increase max HP + heals) but as an AR she has lower burst gen. As a defender, however, she pairs perfectly with Biscuit-SAnis setups. Her Burst's self healing aspect also works well with her S1's additional damage, and her S2's HP bumps gives her three short lifelines, allowing her to survive quite a long time even without Biscuit. Overall a very strong defender to use as long as you can make up for her lower burst gen with the rest of the team."]
    }, "blanc": {
        tier: "A+",
        role: "Shielder + Debuffer + Healer",
        skills: "-/-/10",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Grants indom to lowest HP + heals full team, debuffs enemy team",
        full: ["Blanc has a crazily overloaded kit that shields the team, heals the team, grants indomitability to the lowest HP team member, and debuffs the entire enemy team with a damage taken debuff. While indom is slightly different from invuln, it is still extremely strong in PvP, and the damage debuff is effectively the same as an attack buff. The main downside of Blanc is that she is an AR with very poor burst gen, making her difficult to use when trying to build fast bursting teams. Do note that, unlike in PvE, you do not need to run Blanc with her sister Noir as PvP fights usually do not last long enough for cooldowns to matter."]
    }, "anne_miracle_fairy": {
        tier: "A+",
        role: "Buffer + Healer + Revive",
        skills: "-/-/7",
        cube: [CubeName.Adjutant],
        tl_dr: "Attack buff for attackers + rez for attackers",
        full: ["XAnne was a Christmas limited unit who was often passed on for PvE but is actually extremely strong in PvP. Her Burst applies the second highest ATK buff in the game (after Red Hood) and also heals all Attackers and resurrects 1 fallen Attacker. Unfortunately she doesn't pair with either 2B nor SAnis as neither are Attackers, but she is a very strong B2 pick for Scarlet or any other Attacker hypercarry."]
    }, "scarlet_black_shadow": {
        tier: "(A+)",
        role: "Hypercarry",
        skills: "10/-/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Crazy DPS to 1 target during Full Burst. Hard countered by Sakura or Makima or Defender + Biscuit",
        full: ["Scalter is a stronger version of Red Hood and Alice but with more weak points. Despite being a RL, her auto attacks only hit 1 target. Due to her faster charge time, her burst gen pattern is odd and, combined with her hits only hitting 1 target, she generates much less burst gen than the average RL. Her S1 procs also add in lots of additional damage but because they are distributed damage, each hit doesn't hit for much so it is mostly bonus damage and not strong nuking like SAnis. Despite this, she outdamages both Red Hood and Alice so she can be used as a replacement for them on attack. She is not recommended for defence as she is a Wind unit so she can get hard countered by Sakura whose Burst skill reduces Scalter's damage by over 50% at lvl 1 (and over 90% at lvl 10). As a mainly single target DPS, she also gets hard countered by Makima and Defender + Biscuit combo (whose distributed damage aspect can sometimes result in Scalter's S1 doing zero damage)."]
    }, "red_hood": {
        tier: "A+",
        role: "Hypercarry and/or Buffer",
        skills: "10/10/10",
        cube: [CubeName.Bastion, CubeName.Adjutant],
        tl_dr: "Team ATK buffer + Crazy DPS to 1 target during Full Burst. Countered by Makima or Defender + Biscuit",
        full: ["Red Hood has an extremely overloaded kit but requires heavy investment to shine. Once fully invested, however, she becomes an extremely strong DPS hypercarry who more or less matches Alice's damage output (between 85-135% depending on your OL investments) in PvP. She has an additional advantage over Alice in that she can be used as both a B1 buffer and B3 attacker. Due to her having infinite ammo during burst, you can focus her OL lines on charge speed, charge damage, and attack to further increase her DPS. Unlike SAnis, however, her attacks only hit 1 target, and as an SR, her targetting logic starts on P1 when on defence, so she can be easily countered by Makima or Biscuit + Defender placed on P1. Because of how easy it is to counter it, it is recommended you only use her on attack."]
    }, "alice": {
        tier: "A",
        role: "Hypercarry",
        skills: "10/4/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Crazy DPS to 1 target during Full Burst. Countered by Makima or Defender + Biscuit",
        full: ["Alice is an extremely strong DPS hypercarry in PvP due to her Burst + S1 allowing her to continually fire off high damage single target shots that will easily melt any unit who is not protected by indom/invuln. It is highly recommended you invest heavily into Alice's skill levels as well as aim for max ammo rolls on her OL and equip her with a Bastion cube so that she can continue shooting during Full Burst. Like Red Hood, her attacks only hit 1 target, and as an SR, her targetting logic starts on P1 when on defence, so she can be easily countered by Makima or Biscuit + Defender placed on P1. Because of how easy it is to counter it, it is recommended you only use her on attack."]
    }, "kilo": {
        tier: "A-",
        role: "1-shot Carry",
        skills: "1/-/10",
        cube: [CubeName.Vigor],
        tl_dr: "AoE nuke Burst. Pair with Noise and/or Blanc. Hard countered by Noah. Soft countered by Noise or Moran",
        full: ["Kilo is a free AoE nuker who is a better version of 2B. Her Burst scales off of her max HP like 2B but cannot be hard countered by Rosanna nor Biscuit as it is a true AoE hit and the scaling is not contingent on having any buff. She does need her S1 shield to be up at time of Burst though, so she needs to be positioned in P3 or P4 to be safe. Her burst damage is buffed by units that increase max HP (e.g. Noise, Frima, Mast, Quiry) and units that increase damage dealt/taken (e.g. Blanc, Crown). Due to her high multiplier, she only needs one buffer but against teams with Noise or Moran, she needs two. Like with all other AoE nuke Burst units, she is hard countered by Noah. Outside of burst, she offers no real damage, making Kilo a one-trick pony."]
    }, "2b": {
        tier: "(A-)",
        role: "Hypercarry",
        skills: "7/10/10",
        cube: [CubeName.Vigor],
        tl_dr: "AoE nuke Burst. Pair with Noise. Hard countered by Rosanna or taunt Defender + Biscuit or Noah. Soft countered by Noise or Moran",
        full: ["2B is a \"mini\" Scarlet in a sense in that she is a strong DPS hypercarry with a strong Burst that can 1-shot wipe the enemy team and immediately end the fight. Unlike Scarlet, however, her attack stat comes from her S2, which converts a percentage of her total HP to attack. At higher synchro levels, this converted amount is extremely high and puts her at almost the same level of a Scarlet with full attack stacks. Because she scales off of HP, however, her support units are a bit different, namely Noise and Mast for their HP buffs. Like Scarlet though, 2B's Burst can be soft countered by Noise's max HP buff and Moran's damage reduction buff, and hard countered by Noah's team invuln buff. In addition, Rosanna hard counters her by stripping away her S2 buff, making her Burst hit like a wet noddle. And to make it worse, because of the way 2B's Burst calculates damage, it is even possible to completely negate her Burst damage by taunting her with a Defender that is also invuln due to Biscuit's passive. All of these shortcomings makes her notably weaker than Scarlet."]
    }, "bay": {
        tier: "A-",
        role: "Anti-Nuke + Damage Share",
        skills: "-/-/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Hard counters Scarlet and MPrivaty, enables Team Quiry, doesn't do much gainst other teams",
        full: ["Bay is your budget Noah, but only really against Scarlet and MPrivaty. Her S2 effectively redirects all damage dealt to the team to Bay's Cover, effectively absorbing Scarlet and MPrivaty's AoE nuke and single target Bursts like Power and Snow White. It has limited usage against multi-hit bursts like Maiden's, Scalter, SAnis, Red Hood, and Alice. 2B and Emilia's nukes however bypass Bay's effect. Bay doesn't have any taunting skills, but her team-wide damage share can be taken advantage of by Team Quiry: https://youtu.be/nfBjudEtlGg "]
    }, "privaty_unkind_maid": {
        tier: "A-",
        role: "Hypercarry",
        skills: "-/-/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "AoE nuke Burst. Pair with two buffers. Hard countered by Noah. Soft countered by Noise or Moran",
        full: ["MPrivaty is a slightly better Maiden whose AoE burst hits for about the same (only a tad bit harder) without needing a Jackal link but still requires two buffers (e.g. Red Hood/XMica + XAnne/Blanc/Poli) to 1-shot the enemy team and still just a budget Scarlet alternative. Her burst gen is that of a normal SG though so she cannot be used as a burst gen filler like Maiden, but the fact that she hits harder and without requiring Jackal puts her overall at the same tier as Maiden. As an SG, be careful not to use her against Jackal teams."]
    }, "maiden": {
        tier: "A-",
        role: "Hypercarry + Burst Gen",
        skills: "7/-/10",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "AoE nuke Burst but requires heavy support. High burst gen + self buff on getting attacked. Hard countered by Noah. Soft countered by Noise or Moran",
        full: ["Maiden is a very strong DPS carry pick that can be used as a budget Scarlet alternative but requires a heavy amount of support. To ensure that her burst is capable of 1-shotting the enemy team, she requires two buffers (e.g. Red Hood/XMica + XAnne/Blanc/Poli) as well as a Jackal link to ensure her S1 gives her the self attack-buff for boosting her Burst damage without dying before Burst. Even if you don't build her as the main DPS, she still retains her value though as a filler clip SG with high burst gen. As an SG, be careful not to use her against Jackal teams."]
    }, "pepper": {
        tier: "A-",
        role: "DPS + Burst Gen",
        skills: "-/-/7",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "High burst gen + strong nuke Burst",
        full: ["Pepper is an extremely solid B1 pick (for when you can't run Jackal, Noise or Rapunzel) due to her high burst gen as a clip SG as well as her extremely strong Burst which nukes the highest attack enemy unit. This Burst works well with other Bursts that also target highest atk (e.g. SAnis and Power) as well as with AoE nukes (e.g. Scarlet, 2B, Maiden) by ensuring the biggest threat (usually the highest atk unit) is dead. As an SG, be careful not to use her against Jackal teams."]
    }, "noir": {
        tier: "B+",
        role: "Buffer + Burst Gen",
        skills: "7/9*/-",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "High burst gen + team attack buff + team reload ammo. Do not pair with SAnis or Privaty",
        full: ["While Noir isn't as strong as her sister in PvP, she is still a decent filler as a clip SG with high burst gen, an S1 passive which gives the entire team a constant attack buff, and an S2 passive which reloads the entire team's max ammo during Full Burst. As an SG, be careful not to use her against Jackal teams.", "*Note: Noir's S2 passive bricks SAnis (due to her wanting to be reduced to 1 ammo) so you have to be careful not to put the two in the same team."]
    }, "sakura_bloom_in_summer": {
        tier: "B+",
        role: "Off-DPS",
        skills: "-/10/10*",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Strong Off-DPS, usable main DPS for attack only",
        full: ["SSakura is an off DPS whose S2 effectively gives you a \"free Pepper/Rosanna nuke\" without actually needing to burst with her. During Full Burst, her damage is like a \"mini SAnis\" but only on one target. Due to her targetting logic, she her DoT cannot be taunted, but at the same time won't target switch upon target death, limiting her contribution to only killing a single (likely high priority) unit. Her low burst gen means team building with her is difficult, but if you can fit her into your team, free damage is always nice. Her Burst is kinda usable (effectively deals a 2-hit nuke on every enemy unit over the course of 2.2s) and can be used in place of other AoE nukers if you don't have them invested (e.g. Maiden/MPrivaty/etc) but just don't burst with her on defence as she is ironically hard countered by OG Sakura."]
    }, "laplace": {
        tier: "B+",
        role: "Off-DPS + Burst Gen",
        skills: "4/10/-",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "Off DPS + almost clip SG level burst gen",
        full: ["With her new Treasure item, Laplace becomes a powerhouse PvE and PvP unit with very high burst gen (almost clip SG level) while also doing very strong AoE damage thanks to her updated S2 (effectively double hitting). This makes her a very solid off-DPS to pair with Emilia/etc."]
    }, "drake": {
        tier: "B",
        role: "Buffer + Burst Gen",
        skills: "7/7/-",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "High burst gen + team attack buff",
        full: ["Drake is a decent filler as a clip SG with high burst gen and an S1 which gives the entire team a minor attack buff on Full Burst. Her S2 can also help deal a bit of extra damage if the fight lasts long enough but for the most part she is just an auto-attacker. As an SG, be careful not to use her against Jackal teams."]
    }, "a2": {
        tier: "B-",
        role: "Off-DPS + Burst Gen",
        skills: "-/10/-",
        cube: [CubeName.Bastion, CubeName.Quantum],
        tl_dr: "Decent off DPS + higher burst gen than other RLs",
        full: ["A2 is an unusual RL DPS with above average burst gen due to her unique slower charge speed. This makes her a slightly better filler compared to other RLs but not as good as the clip SGs. While on paper her Burst seems like it can be extremely powerful by hitting all 5 enemy targets due to her S1 increasing her explosion range, her auto-attack speed is just way too slow for her to be a practical DPS hypercarry like SAnis or Alice. Out of burst, her default explosion radius lets her auto-attacks hit 3 units instead of 2, making her a decent off-DPS to pair with Emilia."]
    }, "power": {
        tier: "C",
        role: "DPS",
        skills: "7/-/10",
        cube: [CubeName.Adjutant],
        tl_dr: "1-shot highest attack",
        full: ["Power is a one-trick pony whose high Burst damage multiplier has the potential to 1-shot the enemy main DPS at lower levels, but falls off at higher synchro levels (e.g. 281+) and is no longer able to 1-shot anymore without high support and investments. Unlike the other DPS carries, after she blows her load, her auto-attack is pretty weak, overall making her a subpar pick in today's meta with all the various better options."]
    }, "crown": {
        tier: "C",
        role: "Buffer",
        skills: "10/10/10",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Strong buffer",
        full: ["Crown is a PvE queen/king but in PvP, being an MG with very low burst gen and high Jackal feed, she is just a backup pick. All 3 of her skills can help increase your team's damage, but they work differently. Her S1 buff only applies AFTER Full Burst has started, so only units like SAnis, Red Hood and Alice benefit from it. Her S2 buff only applies when she receives a recovery effect, so that only really applies when you have Emma or Rapunzel on your team (Noise's heal tick should also trigger it but that happens after your B3). Her Burst buff is nice because it is an increase in Attack Damage rather than just Attack (different multiplier) but its not as strong as most of the other buffers."]
    }, "liter": {
        tier: "C",
        role: "Buffer",
        skills: "-/-/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Strong atk buff",
        full: ["While Liter is very strong in PvE due to her Burst's extremely strong attack buff, her being an SMG means using her will extremely gimp your team's burst gen speed and so she is generally not recommended due to the importance of burst gen in PvP. Being an SMG, she also feeds Jackal comps. Nevertheless, because she is often a heavily invested PvE unit and her burst does add a lot of value for most DPS units (except 2B), some people still run her when lacking other good B1 picks."]
    }, "mica_snow_buddy": {
        tier: "C",
        role: "Buffer",
        skills: "-/10/10",
        cube: [CubeName.Quantum],
        tl_dr: "Ok atk buff with higher burst gen",
        full: ["XMica is a mediocre B1 buffer (her atk buff scales off her own atk so ends up being weaker than most) but with a decent burst gen which puts her above regular RLs but not yet at clip SG level. Being an SMG, she also feeds Jackal comps. She might have some niche team comp usage though if the team really really needs that extra attack buff but also needs more burst gen than what Liter/N102/Privaty/etc offers."]
    }, "snow_white": {
        tier: "D",
        role: "DPS",
        skills: "-/-/-",
        cube: [CubeName.Onslaught],
        tl_dr: "Burst takes way too long to fire",
        full: ["On paper, Snow White looks like an extremely strong Burst unit who can easily 1-shot any opponent, but in reality, Bursting with her is actually a detriment due to 1) how long it takes for her Burst to charge (during which the enemy will probably have killed your team) and 2) her target just being Position 1 instead of a higher priority target like Power. Overall it is not recommended to run her in PvP"]
    }, "modernia": {
        tier: "(D)",
        role: "DPS",
        skills: "-/-/-",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Bad burst gen + easily countered by Jackal ",
        full: ["Modernia is an extremely strong PvE unit but very lacking in PvP due to her very low burst gen and being an MG who feeds Jackal comps. Her Burst can be potentially paired with a super stall team since it extends the Full Burst duration by an additional 5s (giving your team an overall advantage) but the current meta favours fast killing on or right after Full Burst. Because she is a heavily invested PvE unit, she can maybe be used in your 3rd team for CP padding but overall it is not recommended to run her in PvP."]
    }, "ludmilla_winter_owner": {
        tier: "(D)",
        role: "DPS",
        skills: "-/-/-",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Worse version of Modernia for PvP",
        full: ["XLudmilla is for PvE bossing and for lewding, but not for PvP. Her burst gen is even worse than Modernia's as she only gets an extra hit every 60 attacks rather than every hit. And because she is always single target even during her burst, she gets easily hard countered by Makima and Biscuit + Defender, in addition to feeding Jackal hard."]
    }, "maxwell": {
        tier: "D",
        role: "Buffer",
        skills: "10/-/-",
        cube: [CubeName.Onslaught],
        tl_dr: "Decent buffer but bad burst gen for a support ",
        full: ["Maxwell sees good usage in PvE as a Snow White or Alice buffer with an extremely strong S1 that buffs your DPS carry, but in PvP, her low burst gen as a SR makes her not worth using over any SG or RL. Overall it is not recommended to run her in PvP"]
    }, "harran": {
        tier: "D",
        role: "DPS",
        skills: "-/-/-",
        cube: [CubeName.Onslaught],
        tl_dr: "Just don't use her",
        full: ["In the very very early days where there were few DPS options, Harran was a good AoE burst clear unit in PvE and a usable one for PvP. Since then, Harran has drastically fallen off due to low multipliers on her Burst and generally poor damage from her auto-attacks. Just please don't use her and spend a Skill Reset book to reset her skills if you haven't already."]
    }, "soda_twinkling_bunny": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/4/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen and strong autos during Full Burst",
        full: ["Bunny Soda had the potential of being an AoE nuker but due to a low multiplier, she is effectively just a clip SG. She doesn't offer any real team utility but her S2 drastically increases her auto-attack damage during Full Burst, so that's something at least."]
    }, "sugar": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/7*/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen + SGs increase max ammo. Do not pair with SAnis.",
        full: ["Sugar is a decent filler as a clip SG with high burst gen. Her S1 gives her a small self buff but nothing major. If she is paired with a team of other SGs, her S2 gives all other SGs a huge max ammo buff during Full Burst. This is really nice when running a SG heavy team. As an SG, be careful not to use her against Jackal teams.","*Note: Sugar's S2 passive bricks SAnis (due to her wanting to be reduced to 1 ammo) so you have to be careful not to put the two in the same team."]
    }, "viper": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/-/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen filler but is a SG, avoid Jackal",
        full: ["Viper's kit has zero value in PvP (there are no \"target appears\" events in PvP) but she is a clip SG so she can be used as a burst gen filler. As an SG, be careful not to use her against Jackal teams."]
    }, "neon": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/-/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen filler but is a SG, avoid Jackal",
        full: ["Neon is an SG with low stats and not a very meaningful kit for PvP but she is a clip SG so she can be used as a burst gen filler. As an SG, be careful not to use her against Jackal teams. Be careful of the CP penalty when using her due to her low base stats as a purple SR unit."]
    }, "nihilister": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/-/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen filler that isn't a SG",
        full: ["Nihilister is a SR with unusually high burst gen due to her S1 letting her double hit her targets (enemy Nikke + cover). This results in her having a really high burst gen that is above that of other RLs but under that of clip SGs. But because she is not a SG, she is safe to use against Jackal teams. Be careful of the CP penalty when using her due to her low core count."]
    }, "pascal": {
        tier: "Burst",
        role: "Burst Gen",
        skills: "-/-/-",
        cube: [CubeName.Quantum],
        tl_dr: "High burst gen filler, RL that wants to be a SG",
        full: ["Pascal is a RL with unusually high burst gen due to his instant charged shots (opposite of A2) like a SG. Due to a bug where his first hit always misses (and attacks the ground instead), his burst gen is below that of SGs but still higher than all other RLs. But because he is not a SG, he is safe to use against Jackal teams. Be careful of the CP penalty when using him due to his low base stats as a purple SR unit."]
    }, "privaty": {
        tier: "Special",
        role: "DPS + Stun",
        skills: "10/7/7",
        cube: [CubeName.Resilience],
        tl_dr: "3s enemy team-wide stun. Gatekeeper against slow teams.",
        full: ["Early on, Privaty used to be an extremely strong meta unit due to her Burst applying a 3s stun, which would easily result in a win due to how low player defences were. As synchro levels have gone up and people geared up, however, this 3s stun tapered off, but is still strong nevertheless and a very good counter against any slow teams (e.g. 3.5RL or longer). A \"gatekeeper\" that can be used to punish any defence team with poor burst gen. Make sure not to pair with Noir or Liter to avoid increasing Privaty's ammo count."]
    }, "rosanna": {
        tier: "Special",
        role: "Debuffer",
        skills: "7/-/-",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Strips buffs from highest 2 atk. Soft counter to Jackal, hard counter to 2B",
        full: ["Rosanna is a specialized unit who S1 is capable of stripping away buffs from the 2 enemy units with the highest attacks. This makes her a soft counter to Jackal teams (by stripping away the damage share buff) and a hard counter to 2B (by stripping away her HP->ATK buff). Do note that as an MG, she has terrible burst gen so it is not recommended you use her outside of acting as a specialized counter pick when attacking."]
    }, "emma": {
        tier: "Special",
        role: "Healer",
        skills: "7/-/-",
        cube: [CubeName.Healing],
        tl_dr: "Pair with Jackal for crazy heals, just don't use against an enemy Jackal",
        full: ["Emma has an interesting S1 that has a low chance of healing your team when hit. If used against a team that is for some reason running MGs, this can drastically heal your team for a lot. When linked with Jackal, this can heal your team for crazy amounts. But as an MG, she has terrible burst gen and also feeds enemy Jackals. And with so many non-MG/SMG options out there, it is rare that you will see any teams running one or more of them. But if you do happen to come across a Modernia team, Emma is the easy counter."]
    }, "ludmilla": {
        tier: "Special",
        role: "Taunt",
        skills: "-/-/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "AoE taunt. Pair with Biscuit for invuln.",
        full: ["Ludmilla is the premium Defender pick to be paired with Biscuit due to being a B1 and also having a full-team 15s taunt (which activates on Full Burst so she does not even need to be the primary B1) that also decreases the damage she takes during that taunt. Outside of usage with Biscuit, however, she is not recommended due to her low burst gen."]
    }, "makima": {
        tier: "Special",
        role: "Taunt + Invuln",
        skills: "-/-/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "AoE taunt + self indom. Hard counter to SGs and Alice. Pair with Biscuit for invuln.",
        full: ["Makima is a hard counter to SG teams (when put in P5) and Alice (when put in P1) due to her S2 both taunting all targets and granting herself Indomitability when dying, effectively turning her into a zombie for the next 7s. As a Defender, she also pairs with Biscuit for an additional 5s of Invulnerability. As an SMG though, she has very low burst gen."]
    }, "nero": {
        tier: "Special",
        role: "Taunt",
        skills: "-/7/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Meatshield + AoE taunt. Pair with Biscuit for invuln.",
        full: ["Nero is a giant meatshield whose S2 gives her a giant HP buff at the start of fights and taunts for 15s on Burst. She is also a Defender who can pair with Biscuit for the 5s Invulnerability."]
    }, "diesel": {
        tier: "Special",
        role: "Taunt",
        skills: "4/-/-",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "AoE taunt. Hard counter to SG and MG teams. Pair with Biscuit for invuln.",
        full: ["Diesel is a hard counter to SG and MG teams due to S1 which heals herself whenever she gets hit. Her Burst taunts for 5s and she is also a Defender who can pair with Biscuit for the 5s Invulnerability. If the enemy team decides to run Modernia for whatever reason, Diesel can solo defend against her."]
    }, "poli": {
        tier: "Special",
        role: "Buffer",
        skills: "4/-/7",
        cube: [CubeName.Tempering, CubeName.Vigor],
        tl_dr: "Discount XAnne/Blanc if you have neither",
        full: ["Poli is a discount B2 attack buffer for if you don't have XAnne or Blanc and really need that attack buff so that your Scarlet can 1-shot everything. Pure copium pick."]
    }, "quiry": {
        tier: "Special",
        role: "Buffer",
        skills: "-/-/7",
        cube: [CubeName.Healing, CubeName.Vigor],
        tl_dr: "Meme Stall Team",
        full: ["If you like to troll in arena and are willing to throw a crap ton of resources into building the ultimate stall team, watch this: https://www.youtube.com/watch?v=OrAwMDPIfME", "Other than that, she can technically help buff 2B but the buff amount is so trivial I would not recommend it"]
    }, "tove": {
        tier: "Special",
        role: "Buffer",
        skills: "9/10/10",
        cube: [CubeName.Bastion],
        tl_dr: "SG Team Buffer",
        full: ["Tove is the premium SG buffer, giving SGs on your team a top tier attack buff as well as a crazy good attack speed buff (turning Sugar into the SG equivalent of Alice). Unfortunately SG teams are easily countered (by Jackal, Makima, and Biscuit) so you will be limited to using Tove on attack only. She also needs very high skill level and gear/core investments since her attack buff scales off of her own atk stats."]
    }, "rei_ayanami": {
        tier: "A",
        role: "AoE Nuke + DPS Carry",
        skills: "-/10/10",
        cube: [CubeName.Bastion, CubeName.Wingman],
        tl_dr: "Extremely strong AoE nuke Burst. Hard countered by Noah or Bay. Soft countered by Scarlet-Jackal",
        full: ["Rei Ayanami is an extremely strong AoE nuker whose high multiplier and self buffs enable her to 1-shot with only one buffer (but two is always prefered due to dolls and tempering cube). She is an MG so she has very low burst gen and is vulnerable against Scarlet-Jackal comps. She is also hard countered by Noah and Bay like most other AoE nukers. Nevertheless, she is a stronger pick in other situations over most other AoE nukers. She is just a one-trick pony as she doesn't offer much else other than her nuke."]
    }, "template": {
        tier: "",
        role: "",
        skills: "-/-/-",
        cube: [],
        tl_dr: "",
        full: [""]
    }
}