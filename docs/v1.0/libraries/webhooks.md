---
title: "Webhooks"
excerpt: "Utilize webhooks to receive crawl and other data as Foundrybot creates it."
---
[block:api-header]
{
  "title": "Overview"
}
[/block]
An example use case and flow for utilizing webhooks is as follows:
  * User requests for a new domain crawl to foundrybot for `www.example.com`
  * Foundrybot accepts and gets started on the crawl
  * User defines a webhook url to be notified at whenever Foundrybot creates a new snapshot

Webhooks allow you to register a url that we will notify anytime a system event occurs. Whenever something happens, such as a new `snapshot` getting created, in the Foundrybot system an `Event` object is created. This object contains the relevant data associated with what triggered the event to occur.

Webhooks are primarily useful for behind-the-scenes transactions occurring. All requests to Foundrybot return synchronously in your code and don't require webhooks to verify data. 
[block:api-header]
{
  "title": "Webhook Settings"
}
[/block]
You can setup Foundrybot to run webhooks for a number of events that can occur. You can do this via the [webhook settings](https://dashboard.foundrybot.com/org/webhooks) panel in the dashboard (coming soon).

You can enter any URL you'd like to be notified at whenever a defined event occurs, but it should be a dedicated endpoint specifically meant to handle Foundrybot requests. You can define which events you wish to be notified of.
[block:api-header]
{
  "title": "Example: Webhook Endpoint"
}
[/block]
Create an endpoint on your server to handle a Foundrybot webhook notification. Webhook data is sent as a JSON body via a POST request.