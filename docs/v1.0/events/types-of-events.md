---
title: "Types of events"
excerpt: ""
---
Events are how Foundrybot tracks changes in data your account. When a change in your organization's data occur, we create an `Event` object and store it for reference. For example, if you previously created a crawl through our API, we will create a `snapshot.created` event for every snapshot that is created in that crawl.

Events are like any other API resource and can be accessed programmatically. You can get an [individual event](https://foundrybot.readme.io/v1.0/reference#get-an-event) or [search your events](https://foundrybot.readme.io/v1.0/reference#search-events) using our API. Additionally, you can configure a webhook notification via your [webhook settings](https://foundrybot.readme.io/v1.0/reference#org-webhook-setting-object). 
[block:api-header]
{
  "type": "basic",
  "title": "Types of Events"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Event Type",
    "h-1": "Description",
    "0-0": "**crawl.created** ",
    "0-1": "Occurs whenever a domain crawl is created.",
    "1-0": "**crawl.completed**",
    "1-1": "Occurs when a domain crawl successfully completes.",
    "2-0": "**snapshot_request.created**",
    "2-1": "Occurs whenever a url has been queued up to be crawled.",
    "3-0": "**snapshot_request.completed**",
    "3-1": "Occurs whenever a url has been successfully crawled and parsed.",
    "4-0": "**snapshot_request.failed**",
    "4-1": "Occurs whenever there was a failure to crawl a given url.",
    "5-0": "**snapshot.created**",
    "5-1": "Occurs whenever a url has been successfully crawled and parsed.",
    "6-0": "**user.updated**",
    "6-1": "Occurs whenever an individual user account has been updated."
  },
  "cols": 2,
  "rows": 7
}
[/block]