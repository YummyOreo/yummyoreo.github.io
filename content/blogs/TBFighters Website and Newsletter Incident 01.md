## Key Take Aways
The incident started on May 4th, 2024 (2024-05-04) and ended on May 24th, 2024 (2024-05-24), lasting 20 days.

The result of the actions taken to remedy the incident make it impossible to signup if the name equals the email exactly and all signups where the name matches the email exactly have been removed. We do not intend revert this change in the future.

## Summary
Starting on May 4th, 2024 Cloudflare reported that automated (or bot) traffic had increased by 82% for the tbfighters.com domain.[^1] Further investigation revealed that the traffic was coming from China and Russia. This in its self is not a problem due to caching and is still ongoing at the time of writing this.

During the same time, signups to the newsletter also spiked, along with welcome message failures.[^3] Signups with their name as their email also spiked during this time.[^4]

In response, we have removed all of the signups if their name matches their emails exactly and prevented signups from happening if the name matches their email.

## Timeline
### May 4th, 2024 (2024-05-04)
Bot traffic increases by 82%.[^1]

### May 5th, 2024 (2024-05-05)
Nolram notifies TBFighters in the `tb-channel-new-people-go-here` channel in the Nerdfigheria discord of the increased traffic.[^1]

### May 8th, 2024 (2024-05-08)
Dan informs TBFighters in the `web-dev` thread of the `tb-channel-new-people-go-here` channel in the Nerfighteria discord of the potential of spam signups.[^3][^4]

Later that day, we decide that they are indeed spam.[^5] Brainstorming on what to do begins.

### May 10th, 2024 (2024-05-10)
We decide to send a email to Gaggle about the incident asking what they could do about the spam.[^6]

### May 11th, 2024 (2024-05-11)
[PR is submitted](https://github.com/TBfighters/tbfightersdotorg/pull/102) to the `tbfighters/tbfightersdotorg` github repo to disable signups if the name matches the email.[^7]

### May 12th, 2024 (2024-05-12)
Gaggle responds to email saying they can't do anything.[^8]

### May 24th, 2024 (2024-05-24)
[PR is merged](https://github.com/TBfighters/tbfightersdotorg/pull/102)!

### May 25th, 2024 (2024-05-25)
Dan reports that the PR worked.[^9]

## Rational
We believe that these signups (where name matches email) are spam because of the increase in bots on the website and there has been almost no signups where the name matches the email before the incident on the website began.[^5]

## Response
### Rejected Options
- **CAPTCHA**: This was considered, but due to how the signups work, it could just be circumvented by going directly to Gaggle.
- **Disable Signups**: This was considered as a temporary solution, but we never got to it.
- **Manual Approve**: This would be too much work on the admin's side.
- **Retroactively Auto Removal**: Retroactively removing the signups was taken, but doing it in an automated way was never implemented due to the amount of development time it would take.

### Chosen Option
The chosen solution/response was to have a client-side check to see if the name matches the email. If it does, the signup would not go through and it will display an error message.[^7]
#### Effectiveness
This did, at least, temporarily halt the suspicious signups.[^9] And it was quick and easy to make.

#### Weaknesses
This solution could be circumvented by just going to Gaggle directly.

## Future Response
I (YummyOreo) am currently working on a "proxy" api, so that every signup has to comply with our standards, not Gaggle's (see [here](https://github.com/TBfighters/newsletter-signup)).

## Stats
### Website
- There was a 82% increase in bot traffic on 2024-05-04.[^1]

#### Requests per Region for the Last 24h on 2024-05-05

| Region        | Traffic |
| ------------- | ------- |
| United States | 4,218   |
| Russia        | 144     |
| China         | 137     |
| UK            | 103     |
| Canada        | 65      |
> https://discord.com/channels/252701351786577920/1146483253725888542/1236844806869749760

### Newsletter
- On 2024-05-07 and 2024-05-05 there were 885 new members and 129 failed deliveries.[^3]
	- The two days before 2024-05-02, for reference, there were only 302 members and 54 failed deliveries.[^10]
- There have been well over 400 signups deleted.[^11]
- There had been no signups were the email matched the name before the incident on the website started.[^5]
- On 2024-05-10, for reference, there was 130 new spam signups.[^6]

## Reflection
Here are a few things that we could do better:
- Communicate the problem, the options and the decisions during the process.
- Speed up the merge time during a incident to stop it as quickly as possible.

[^1]: https://discord.com/channels/252701351786577920/1146483253725888542/1236842881746993233
[^2]: https://discord.com/channels/252701351786577920/1146483253725888542/1236844806869749760
[^3]: https://discord.com/channels/252701351786577920/1149204674390536262/1237375573408612392
[^4]: https://discord.com/channels/252701351786577920/1149204674390536262/1237904935388053506
[^5]: https://discord.com/channels/252701351786577920/1149204674390536262/1237950715704381510
[^6]: https://discord.com/channels/252701351786577920/1149204674390536262/1238581494193324083
[^7]: https://github.com/TBfighters/tbfightersdotorg/pull/102
[^8]: https://discord.com/channels/252701351786577920/1149204674390536262/1239315380498075658
[^9]: https://discord.com/channels/252701351786577920/1149204674390536262/1244066823620530297
[^10]: https://discord.com/channels/252701351786577920/1149204674390536262/1237378963693895721
[^11]: https://discord.com/channels/252701351786577920/1149204674390536262/1237940608115671151