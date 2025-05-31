export type PageID = string;
export type PagesConfig = Record<PageID, Record<string, string>>;
export type HostsConfig = Record<string, string>;

export type GlobalConfig = {
    hostsConfig: HostsConfig;
    pagesConfig: PagesConfig;
}

// these global variable will be accessable accross the framework
