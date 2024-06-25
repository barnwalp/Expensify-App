import NAVIGATORS from '@src/NAVIGATORS';
import SCREENS from '@src/SCREENS';

// Screens that should not have active focus trap when rendered on wide screen in order to allow Tab navigation in LHP and RHP
const WIDE_LAYOUT_INACTIVE_SCREENS: string[] = [
    NAVIGATORS.BOTTOM_TAB_NAVIGATOR,
    SCREENS.HOME,
    SCREENS.SETTINGS.ROOT,
    SCREENS.REPORT,
    SCREENS.SETTINGS.PROFILE.ROOT,
    SCREENS.SETTINGS.PREFERENCES.ROOT,
    SCREENS.SETTINGS.SECURITY,
    SCREENS.SETTINGS.WALLET.ROOT,
    SCREENS.SETTINGS.ABOUT,
    SCREENS.SETTINGS.WORKSPACES,
    SCREENS.SETTINGS.SUBSCRIPTION.ROOT,
    SCREENS.WORKSPACE.INITIAL,
    SCREENS.WORKSPACE.PROFILE,
    SCREENS.WORKSPACE.CARD,
    SCREENS.WORKSPACE.WORKFLOWS,
    SCREENS.WORKSPACE.WORKFLOWS_APPROVER,
    SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_FREQUENCY,
    SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_MONTHLY_OFFSET,
    SCREENS.WORKSPACE.REIMBURSE,
    SCREENS.WORKSPACE.BILLS,
    SCREENS.WORKSPACE.INVOICES,
    SCREENS.WORKSPACE.TRAVEL,
    SCREENS.WORKSPACE.MEMBERS,
    SCREENS.WORKSPACE.CATEGORIES,
    SCREENS.WORKSPACE.MORE_FEATURES,
    SCREENS.WORKSPACE.TAGS,
    SCREENS.WORKSPACE.TAXES,
    SCREENS.WORKSPACE.REPORT_FIELDS,
    SCREENS.WORKSPACE.DISTANCE_RATES,
    SCREENS.SEARCH.CENTRAL_PANE,
    SCREENS.SETTINGS.TROUBLESHOOT,
    SCREENS.SETTINGS.SAVE_THE_WORLD,
];

export default WIDE_LAYOUT_INACTIVE_SCREENS;