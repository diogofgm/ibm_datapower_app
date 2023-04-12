---
layout: default
title: Installation
nav_order: 4
---
# Installation

## Install the IBM DataPower App for Splunk

- Get the IBM DataPower App for Splunk by downloading it from [Splunkbase](https://splunkbase.splunk.com/app/0000/) or browsing to it using the app browser within Splunk Web.
- Determine where and how to install this app in your deployment, using the tables on this page.
- Perform any prerequisite steps before installing, if required and specified in the tables below.
- Complete your installation.


## Distributed deployments

Reference the tables below to determine where and how to install this add-on in a distributed deployment of Splunk Enterprise or any deployment for which you are using forwarders to get your data in. Depending on your environment, your preferences, and the requirements of the add-on, you may need to install the add-on in multiple places.

### Where to install this add-on

Unless otherwise noted, all supported apps can be safely installed to all tiers of a distributed Splunk platform deployment. See [Where to install Splunk add-ons](http://docs.splunk.com/Documentation/AddOns/released/Overview/Wheretoinstall) in Splunk Add-ons for more information.

This table provides a reference for installing this specific add-on to a distributed deployment of Splunk Enterprise.

| Splunk platform component | Supported | Required | Comments
| ------------------------- | --------- | -------- | --------
| Search Heads              | Yes       | Yes      | Install this app to all search heads.
| Indexers                  | No        | No       |
| Heavy Forwarders          | No        | No       |
| Universal Forwarders      | No        | No       |


## Installation walkthroughs

The Splunk Add-Ons manual includes an [Installing add-ons](http://docs.splunk.com/Documentation/AddOns/released/Overview/Installingadd-ons) guide that helps you successfully install any add-on to your Splunk platform.
For a walkthrough of the installation procedure, follow the link that matches your deployment scenario:

- [Single-instance Splunk Enterprise](http://docs.splunk.com/Documentation/AddOns/released/Overview/Singleserverinstall)
- [Distributed Splunk Enterprise](http://docs.splunk.com/Documentation/AddOns/released/Overview/Distributedinstall)
- [Splunk Cloud](http://docs.splunk.com/Documentation/AddOns/released/Overview/SplunkCloudinstall)