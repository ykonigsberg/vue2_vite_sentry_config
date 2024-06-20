export const state = {
    "user": {
        "userData": {
            "email": "yosi.konigsberg@bluevine.com",
            "login_user_id": 1531314,
            "pending_changes": {},
            "product": "dashboard",
            "application": "dashboard",
            "role": "ADMINISTRATOR",
            "slug": "1a6bb398110311ebaa330ab5d8f388d7",
            "common_user_slug": "44bf5083ef180a3dc7cbbefd84552e63",
            "login_user_settings": {
                "credit_card_ship_address": {},
                "is_secondary_banner_dismissed": false,
                "personal_user_first_name": "",
                "personal_user_last_name": "",
                "personal_user_full_name": "",
                "pending_changes": {},
                "require_approval_for_all_payments": false
            },
            "base_dda_url": "/api/v3/dda-user/1a6bb398110311ebaa330ab5d8f388d7/",
            "base_url": "/api/v3/user/1a6bb398110311ebaa330ab5d8f388d7/",
            "business_name": "Yosi Company",
            "company_products": [
                {
                    "slug": "85a03a82e0324ac5a8b4d207ed24de83",
                    "product_name": "factoring",
                    "product_status": "closed"
                }
            ],
            "company_slug": "91884086586a46c79e1b01b57c5d0bb6",
            "created": "2017-02-26T09:19:35.593Z",
            "credit_check_auth_signed": false,
            "intl_payments_event_accepted": false,
            "flags": "{}",
            "full_notification_basis": false,
            "has_accountant_dashboard_user": false,
            "has_deal_open": true,
            "has_other_companies": false,
            "has_slmc_parent": false,
            "id": 67276,
            "invoice_provider": "none",
            "is_from_partner_api": false,
            "is_invoice_provider_connected": false,
            "lead_source": "unknown",
            "notice_file_slug": "",
            "organization_name": {},
            "partner_id": "0000536",
            "partner_name": "BlueVine",
            "partner_tm": false,
            "registration_terms_signed": false,
            "status": "APPROVED",
            "tags": [
                "bank_details",
                "pre_existing",
                "purchase_agreement",
                "individual_guarantee",
                "obtain_credit_report"
            ]
        },
        "showLoginModal": false,
        "fromLoginModal": false,
        "attemptLoginEmail": "",
        "isDismissedBankConnectBanner": false,
        "isLoading": false
    },
    "system": {
        "daysToBvDate": 14,
        "flexIncreaseRequestEnabled": true,
        "requestTlRenewalEnabled": false,
        "isEtranEnabled": true,
        "isCelticEtranEnabled": true,
        "maxReceivablesTerm": 90,
        "serviceEmail": "support@bluevine.com",
        "serviceEmailBanking": "banking.support@bluevine.com",
        "twoWaySmsEnabled": false,
        "intlPaymentsEnabled": false,
        "servicePhone": "1.888.216.9619",
        "pppCarePhone": "1.650.338.4012",
        "salesPhone": "(929) 202-8159",
        "salesEmail": "team@bluevine.com",
        "statementsUnderwritingShowYtd": false,
        "statementsUnderwritingNumberOfMonths": 3,
        "resolutionDepartmentPhone": "1.650.252.1750",
        "salesPhoneExistingClients": "(650) 662-6011",
        "congressPhone": " 1.202.224.3121",
        "leftMenu": {
            "items": [
                {
                    "to": {
                        "name": "home"
                    },
                    "icon": "bv-home",
                    "label": "Home",
                    "weight": 10
                },
                {
                    "to": {
                        "name": "depositAccounts"
                    },
                    "icon": "bv-checking",
                    "label": "Checking",
                    "weight": 10
                },
                {
                    "to": {
                        "name": "factoring"
                    },
                    "icon": "bv-invoices",
                    "label": "Invoices",
                    "weight": 20
                },
                {
                    "to": {
                        "name": "flex"
                    },
                    "icon": "bv-flex",
                    "label": "Line of Credit",
                    "weight": 30
                },
                {
                    "to": {
                        "name": "creditCards"
                    },
                    "icon": "bv-credit-card",
                    "label": "Credit Card",
                    "weight": 35
                },
                {
                    "to": {
                        "name": "termloan"
                    },
                    "icon": "bv-termLoan",
                    "label": "Term Loan",
                    "weight": 40
                },
                {
                    "to": {
                        "name": "ppp-first"
                    },
                    "icon": "bv-checking",
                    "label": "SBA PPP First Draw",
                    "weight": 50
                },
                {
                    "to": {
                        "name": "ppp-second"
                    },
                    "icon": "bv-checking",
                    "label": "SBA PPP Second Draw",
                    "weight": 60
                },
                {
                    "divider": true,
                    "weight": 70
                },
                {
                    "to": {
                        "name": "inbox"
                    },
                    "icon": "bv-inbox-bills",
                    "label": "Inbox",
                    "weight": 80
                },
                {
                    "to": {
                        "name": "bills"
                    },
                    "icon": "bv-bills",
                    "label": "Bills",
                    "weight": 90
                },
                {
                    "to": {
                        "name": "payments"
                    },
                    "icon": "bv-payments",
                    "label": "Payments",
                    "weight": 100
                },
                {
                    "to": {
                        "name": "payees"
                    },
                    "icon": "bv-payee",
                    "label": "Payees",
                    "weight": 110
                },
                {
                    "divider": true,
                    "weight": 120
                },
                {
                    "to": {
                        "name": "customers"
                    },
                    "icon": "bv-customers",
                    "label": "Customers",
                    "weight": 130
                },
                {
                    "to": {
                        "name": "documents"
                    },
                    "icon": "bv-documents",
                    "label": "Documents & Reports",
                    "weight": 140
                },
                {
                    "to": {
                        "name": "external-accounts"
                    },
                    "icon": "bv-accounts",
                    "label": "External Accounts",
                    "weight": 160
                },
                {
                    "divider": true,
                    "weight": 190
                },
                {
                    "to": {
                        "name": "business_insurance"
                    },
                    "icon": "bv-businessInsurance",
                    "label": "Business Insurance",
                    "weight": 200
                },
                {
                    "to": {
                        "name": "business_loans"
                    },
                    "icon": "bv-finance",
                    "label": "Business Loans",
                    "weight": 200
                },
                {
                    "to": {
                        "name": "business_credit_card"
                    },
                    "icon": "bv-credit-card",
                    "label": "Business Credit Card",
                    "weight": 200
                }
            ]
        },
        "supportContactUsPageUrl": "https://www.bluevine.com/contact-us/",
        "pppRevenueDropThreshold": "149999.00000",
        "bccToProduction": false,
        "misnapDdaEnabled": true,
        "industry": [
            {
                "text": "Accommodation and food services",
                "value": "accommodation"
            },
            {
                "text": "Administrative support; Waste management and remediation services",
                "value": "administrative"
            },
            {
                "text": "Adult entertainment",
                "value": "adult"
            },
            {
                "text": "Agriculture, forestry, fishing, and hunting",
                "value": "agriculture"
            },
            {
                "text": "Arts, entertainment, and recreation",
                "value": "arts"
            },
            {
                "text": "Construction",
                "value": "construction"
            },
            {
                "text": "Educational services",
                "value": "educational"
            },
            {
                "text": "Finance and insurance",
                "value": "finance"
            },
            {
                "text": "Gambling",
                "value": "gambling"
            },
            {
                "text": "Health care and social assistance",
                "value": "health"
            },
            {
                "text": "Information",
                "value": "information"
            },
            {
                "text": "Legal services",
                "value": "legal"
            },
            {
                "text": "Management of companies and enterprises",
                "value": "management"
            },
            {
                "text": "Manufacturing",
                "value": "manufacturing"
            },
            {
                "text": "Mining",
                "value": "mining"
            },
            {
                "text": "Other services (except public administration)",
                "value": "other"
            },
            {
                "text": "Professional, scientific, and technical services",
                "value": "professional"
            },
            {
                "text": "Public administration",
                "value": "public"
            },
            {
                "text": "Real estate and rental and leasing",
                "value": "real"
            },
            {
                "text": "Retail trade",
                "value": "retail"
            },
            {
                "text": "Transportation and warehousing",
                "value": "transportation"
            },
            {
                "text": "Utilities",
                "value": "utilities"
            },
            {
                "text": "Weapons and firearms",
                "value": "weapons"
            },
            {
                "text": "Wholesale trade",
                "value": "wholesale"
            },
            {
                "text": "Illegal substances or controlled substances",
                "value": "illegal_substances"
            },
            {
                "text": "Virtual currency or cryptocurrency",
                "value": "cryptocurrency"
            },
            {
                "text": "Cannabis or hemp",
                "value": "cannabis"
            },
            {
                "text": "Firearms and paraphernalia",
                "value": "firearms"
            },
            {
                "text": "Illegal gambling",
                "value": "illegal_gambling"
            },
            {
                "text": "Penny auctions",
                "value": "penny_auctions"
            },
            {
                "text": "Pornography and paraphernalia",
                "value": "pornography"
            },
            {
                "text": "Money service businesses",
                "value": "money_service_businesses"
            },
            {
                "text": "Accounting, bookkeeping, and payroll services",
                "value": "accounting"
            }
        ],
        "fileCategories": [
            {
                "text": "PPP Non Employer Proof of Revenue Docs",
                "value": "ppp_non_employer_proof_of_revenue_docs"
            },
            {
                "text": "Drivers License back side",
                "value": "driver_license_reverse_side"
            },
            {
                "text": "Bank Statement",
                "value": "bank_statement"
            },
            {
                "text": "Additional Owners",
                "value": "additional_owners"
            },
            {
                "text": "Draw File",
                "value": "draw_file"
            },
            {
                "text": "Receivables Aging Report",
                "value": "receivables_aging"
            },
            {
                "text": "BlueVine Lien",
                "value": "bluevine_lien"
            },
            {
                "text": "Check Image",
                "value": "check_image"
            },
            {
                "text": "Credit Report",
                "value": "credit_report"
            },
            {
                "text": "Drivers License",
                "value": "driver_license"
            },
            {
                "text": "Notification of Assignment",
                "value": "notification_assignment"
            },
            {
                "text": "Notification Termination",
                "value": "notification_termination"
            },
            {
                "text": "Other",
                "value": "other_file_category"
            },
            {
                "text": "Adverse Action Letter",
                "value": "adverse_action_letter"
            },
            {
                "text": "Profile Image",
                "value": "profile_image"
            },
            {
                "text": "Proof of Payment",
                "value": "proof_of_payment"
            },
            {
                "text": "Profit and Loss Statement",
                "value": "profit_and_loss_statement"
            },
            {
                "text": "Balance Sheet",
                "value": "balance_sheet"
            },
            {
                "text": "Accounts Payable Aging",
                "value": "accounts_payable_aging"
            },
            {
                "text": "List of Your Customers",
                "value": "list_of_your_customers"
            },
            {
                "text": "Most Recent Tax Return",
                "value": "most_recent_tax_return"
            },
            {
                "text": "Business Debt Schedule",
                "value": "business_debt_schedule"
            },
            {
                "text": "Proof of Work",
                "value": "proof_of_work"
            },
            {
                "text": "Tax Guard Report",
                "value": "tax_guard_report"
            },
            {
                "text": "Tax Repayment Plan",
                "value": "tax_report"
            },
            {
                "text": "Third Party Lien",
                "value": "third_party_lien"
            },
            {
                "text": "Utility Bill",
                "value": "utility_bill"
            },
            {
                "text": "Voided Check",
                "value": "void_check"
            },
            {
                "text": "Agreement",
                "value": "service_agreement"
            },
            {
                "text": "Incorporation Docs",
                "value": "incorporation_docs"
            },
            {
                "text": "Cross Entity Guarantee",
                "value": "cross_entity_guarantee"
            },
            {
                "text": "Estoppel Authorization",
                "value": "estoppel_authorization"
            },
            {
                "text": "Estoppel Confirmation",
                "value": "estoppel_confirmation"
            },
            {
                "text": "Signed Notification",
                "value": "signed_notification"
            },
            {
                "text": "Notification Confirmation",
                "value": "notification_confirmation"
            },
            {
                "text": "Business TLO",
                "value": "business_tlo"
            },
            {
                "text": "Personal TLO",
                "value": "personal_tlo"
            },
            {
                "text": "Profit and Loss",
                "value": "profit_and_loss"
            },
            {
                "text": "Contract with Debtor",
                "value": "contract_with_debtor"
            },
            {
                "text": "Invoice Copy",
                "value": "invoice_copy"
            },
            {
                "text": "Release Letter",
                "value": "release_letter"
            },
            {
                "text": "Ratification",
                "value": "ratification"
            },
            {
                "text": "Intercreditor Agreement",
                "value": "intercreditor_agreement"
            },
            {
                "text": "Collateral Sharing Agreement",
                "value": "collateral_sharing_agreement"
            },
            {
                "text": "Collections",
                "value": "collections"
            },
            {
                "text": "Statement of Account",
                "value": "statement_of_account"
            },
            {
                "text": "Vendor Forms",
                "value": "vendor_forms"
            },
            {
                "text": "Zero Balance Letter",
                "value": "zero_balance_letter"
            },
            {
                "text": "Buyout Letter",
                "value": "buyout_letter"
            },
            {
                "text": "Outstanding Balance Letter",
                "value": "outstanding_balance_letter"
            },
            {
                "text": "Search to Reflect",
                "value": "search_to_reflect"
            },
            {
                "text": "No Interest Letter",
                "value": "no_interest_letter"
            },
            {
                "text": "Entity/Validity Guarantee",
                "value": "entity_validity_guarantee"
            },
            {
                "text": "Lien Termination File",
                "value": "lien_termination_filing"
            },
            {
                "text": "Business License",
                "value": "business_license"
            },
            {
                "text": "SOS Status Change Receipt",
                "value": "SOS_status_change"
            },
            {
                "text": "Unsigned Payoff Letter",
                "value": "unsigned_payoff_letter"
            },
            {
                "text": "Signed Payoff Letter",
                "value": "signed_payoff_letter"
            },
            {
                "text": "Phone bill",
                "value": "phone_bill"
            },
            {
                "text": "Written Check Front Image",
                "value": "written_check_front_image"
            },
            {
                "text": "Checking Documents",
                "value": "checking_documents"
            },
            {
                "text": "Bank Account Activity",
                "value": "bank_transactions"
            },
            {
                "text": "Year End Statement",
                "value": "end_of_year_statement"
            },
            {
                "text": "PPP 1040 Schedule C",
                "value": "ppp_schedule_c"
            },
            {
                "text": "PPP 940 Form",
                "value": "ppp_940"
            },
            {
                "text": "PPP 941 Quarterly Form",
                "value": "ppp_941_quarterly"
            },
            {
                "text": "PPP 1120 Form",
                "value": "ppp_1120"
            },
            {
                "text": "PPP Revenue Drop Form",
                "value": "ppp_revenue_drop"
            },
            {
                "text": "PPP Loan Note Form",
                "value": "ppp_loan_note"
            },
            {
                "text": "PPP 2484 Lender Application",
                "value": "lender_application"
            },
            {
                "text": "Written Check Back Image",
                "value": "written_check_back_image"
            },
            {
                "text": "SBA Application Form",
                "value": "sba_ppp_application_form"
            },
            {
                "text": "PPP Forgiveness Schedule A",
                "value": "ppp_forgiveness_schedule_a"
            },
            {
                "text": "PPP Forgiveness Supporting Docs (Payroll)",
                "value": "ppp_forgiveness_support_payroll"
            },
            {
                "text": "PPP Forgiveness Supporting Docs (FTE)",
                "value": "ppp_forgiveness_support_fte"
            },
            {
                "text": "PPP Forgiveness Supporting Docs (Utility Payments)",
                "value": "ppp_forgiveness_support_utility_payments"
            },
            {
                "text": "PPP Forgiveness Supporting Docs (Rent/Lease Payments)",
                "value": "ppp_forgiveness_support_rent_lease_payments"
            },
            {
                "text": "PPP Forgiveness Supporting Docs (Mortgage Interest Payments)",
                "value": "ppp_forgiveness_support_mortgage_interest_payments"
            },
            {
                "text": "PPP Forgiveness Miscellaneous",
                "value": "ppp_forgiveness_miscellaneous"
            },
            {
                "text": "PPP Forgiveness Application Form",
                "value": "ppp_forgiveness_application_form"
            },
            {
                "text": "Payroll Document",
                "value": "sba_payroll"
            },
            {
                "text": "SBA Addendum A",
                "value": "sba_addendum_a"
            },
            {
                "text": "SBA Forgiveness Documents",
                "value": "sba_forgiveness_documents"
            },
            {
                "text": "Fictitious Name Certificate",
                "value": "fictitious_name_certificate"
            },
            {
                "text": "Business Verification Doc",
                "value": "business_verification_doc"
            },
            {
                "text": "BlueVine PPP Document",
                "value": "sba_legal_document"
            },
            {
                "text": "Demand Letter",
                "value": "demand_letter"
            },
            {
                "text": "Bluevine Bank Letter",
                "value": "bluevine_bank_letter"
            },
            {
                "text": "Partnership Agreement",
                "value": "partnership_agreement"
            },
            {
                "text": "DDA 1099 Int Tax Document",
                "value": "dda_tax_1099_int"
            },
            {
                "text": "Original check front",
                "value": "original_check_front"
            },
            {
                "text": "Original check rear",
                "value": "original_check_rear"
            },
            {
                "text": "Converted check front",
                "value": "converted_check_front"
            },
            {
                "text": "Converted check rear",
                "value": "converted_check_rear"
            },
            {
                "text": "SSN Card",
                "value": "ssn_card"
            },
            {
                "text": "EIN Confirmation Letter (CP 575)",
                "value": "ein_cp575"
            },
            {
                "text": "EIN Inquiry Letter (147c)",
                "value": "ein_147c"
            },
            {
                "text": "503(c)(3) Determination Letter",
                "value": "determination_letter"
            },
            {
                "text": "Articles of Incorporation",
                "value": "articles_of_incorporation"
            },
            {
                "text": "Certificate of Incorporation",
                "value": "certificate_of_incorporation"
            },
            {
                "text": "Secretary of State Status Certificate",
                "value": "secretary_of_state_status_certificate"
            },
            {
                "text": "Decision Notice",
                "value": "decision_notice"
            },
            {
                "text": "DDA Invoice File",
                "value": "dda_invoice_file"
            }
        ],
        "loginUserStatuses": [
            {
                "text": "Invited",
                "value": "PENDING_ACTIVATION"
            },
            {
                "text": "Active",
                "value": "ACTIVE"
            },
            {
                "text": "Created",
                "value": "CREATED"
            },
            {
                "text": "Inactive",
                "value": "INACTIVE"
            },
            {
                "text": "Activation Expired",
                "value": "ACTIVATION_EXPIRED"
            }
        ],
        "supportLinks": [
            {
                "text": "https://bluevine.zendesk.com/hc/en-us/articles/360016040932-Invoice-Section",
                "value": "invoices"
            },
            {
                "text": "https://bluevine.zendesk.com/hc/en-us/articles/360032632172",
                "value": "customers"
            }
        ],
        "freshbooksPaymentTerms": [
            {
                "text": "Net 15",
                "value": "NET15"
            },
            {
                "text": "Net 21",
                "value": "NET21"
            },
            {
                "text": "Net 30",
                "value": "NET30"
            },
            {
                "text": "Net 45",
                "value": "NET45"
            },
            {
                "text": "Net 60",
                "value": "NET60"
            },
            {
                "text": "Net 90",
                "value": "NET90"
            }
        ],
        "industries": [
            {
                "text": "Accounting and Bookkeeping",
                "value": "accounting"
            },
            {
                "text": "Architecture and Engineering",
                "value": "architecture"
            },
            {
                "text": "Business and Professional Services",
                "value": "business"
            },
            {
                "text": "Commercial Cleaning",
                "value": "cleaning"
            },
            {
                "text": "Clothing and Accessories Design",
                "value": "clothing"
            },
            {
                "text": "Construction",
                "value": "const"
            },
            {
                "text": "Art and Graphic Design",
                "value": "design"
            },
            {
                "text": "Environmental, Waste and Recycling",
                "value": "environmental"
            },
            {
                "text": "HR and Staffing",
                "value": "hr"
            },
            {
                "text": "IT Services",
                "value": "it"
            },
            {
                "text": "Manufacturing and Fabrication",
                "value": "manufacturing"
            },
            {
                "text": "Marketing and PR",
                "value": "marketing"
            },
            {
                "text": "Online Media and Publishing",
                "value": "media"
            },
            {
                "text": "Medical Supplies and Services",
                "value": "medical"
            },
            {
                "text": "Oil and Gas",
                "value": "oil"
            },
            {
                "text": "Plumbing, HVAC and Electrical",
                "value": "plumbing"
            },
            {
                "text": "Printing Services",
                "value": "printing"
            },
            {
                "text": "Technical Installation and Repair",
                "value": "retail"
            },
            {
                "text": "Retail",
                "value": "repairs"
            },
            {
                "text": "Security and Protection Services",
                "value": "security"
            },
            {
                "text": "Software and Web Development",
                "value": "software"
            },
            {
                "text": "Freight Transportation",
                "value": "transfreight"
            },
            {
                "text": "Private Transport Services",
                "value": "transservice"
            },
            {
                "text": "Wholesale and Distribution",
                "value": "wholesale"
            },
            {
                "text": "Other",
                "value": "other"
            }
        ],
        "invoiceProvidersActive": [
            {
                "text": "QuickBooks",
                "value": "quickbooks"
            },
            {
                "text": "QuickBooks Desktop",
                "value": "qbd"
            },
            {
                "text": "Xero",
                "value": "xero"
            },
            {
                "text": "FreshBooks",
                "value": "freshbooks"
            }
        ],
        "usStates": [
            {
                "text": "Alaska",
                "value": "AK"
            },
            {
                "text": "Alabama",
                "value": "AL"
            },
            {
                "text": "Arkansas",
                "value": "AR"
            },
            {
                "text": "Arizona",
                "value": "AZ"
            },
            {
                "text": "California",
                "value": "CA"
            },
            {
                "text": "Colorado",
                "value": "CO"
            },
            {
                "text": "Connecticut",
                "value": "CT"
            },
            {
                "text": "Washington, DC",
                "value": "DC"
            },
            {
                "text": "Delaware",
                "value": "DE"
            },
            {
                "text": "Florida",
                "value": "FL"
            },
            {
                "text": "Georgia",
                "value": "GA"
            },
            {
                "text": "Hawaii",
                "value": "HI"
            },
            {
                "text": "Iowa",
                "value": "IA"
            },
            {
                "text": "Idaho",
                "value": "ID"
            },
            {
                "text": "Illinois",
                "value": "IL"
            },
            {
                "text": "Indiana",
                "value": "IN"
            },
            {
                "text": "Kansas",
                "value": "KS"
            },
            {
                "text": "Kentucky",
                "value": "KY"
            },
            {
                "text": "Louisiana",
                "value": "LA"
            },
            {
                "text": "Massachusetts",
                "value": "MA"
            },
            {
                "text": "Maryland",
                "value": "MD"
            },
            {
                "text": "Maine",
                "value": "ME"
            },
            {
                "text": "Michigan",
                "value": "MI"
            },
            {
                "text": "Minnesota",
                "value": "MN"
            },
            {
                "text": "Missouri",
                "value": "MO"
            },
            {
                "text": "Mississippi",
                "value": "MS"
            },
            {
                "text": "Montana",
                "value": "MT"
            },
            {
                "text": "North Carolina",
                "value": "NC"
            },
            {
                "text": "North Dakota",
                "value": "ND"
            },
            {
                "text": "Nebraska",
                "value": "NE"
            },
            {
                "text": "New Hampshire",
                "value": "NH"
            },
            {
                "text": "New Jersey",
                "value": "NJ"
            },
            {
                "text": "New Mexico",
                "value": "NM"
            },
            {
                "text": "Nevada",
                "value": "NV"
            },
            {
                "text": "New York",
                "value": "NY"
            },
            {
                "text": "Ohio",
                "value": "OH"
            },
            {
                "text": "Oklahoma",
                "value": "OK"
            },
            {
                "text": "Oregon",
                "value": "OR"
            },
            {
                "text": "Pennsylvania",
                "value": "PA"
            },
            {
                "text": "Puerto Rico",
                "value": "PR"
            },
            {
                "text": "Rhode Island",
                "value": "RI"
            },
            {
                "text": "South Carolina",
                "value": "SC"
            },
            {
                "text": "South Dakota",
                "value": "SD"
            },
            {
                "text": "Tennessee",
                "value": "TN"
            },
            {
                "text": "Texas",
                "value": "TX"
            },
            {
                "text": "Utah",
                "value": "UT"
            },
            {
                "text": "Virginia",
                "value": "VA"
            },
            {
                "text": "Vermont",
                "value": "VT"
            },
            {
                "text": "Washington",
                "value": "WA"
            },
            {
                "text": "Wisconsin",
                "value": "WI"
            },
            {
                "text": "West Virginia",
                "value": "WV"
            },
            {
                "text": "Wyoming",
                "value": "WY"
            },
            {
                "text": "US Virgin Islands",
                "value": "VI"
            },
            {
                "text": "Guam",
                "value": "GU"
            },
            {
                "text": "Palau",
                "value": "PU"
            },
            {
                "text": "American Samoa",
                "value": "AS"
            }
        ],
        "pppRevenueReferenceQuarter": [
            {
                "text": "Q1 2019",
                "value": "1"
            },
            {
                "text": "Q2 2019",
                "value": "2"
            },
            {
                "text": "Q3 2019",
                "value": "3"
            },
            {
                "text": "Q4 2019",
                "value": "4"
            },
            {
                "text": "Q1 2020",
                "value": "1b"
            },
            {
                "text": "Annual 2019",
                "value": "5"
            }
        ],
        "pppRevenue2020Quarter": [
            {
                "text": "Q1 2020",
                "value": "1"
            },
            {
                "text": "Q2 2020",
                "value": "2"
            },
            {
                "text": "Q3 2020",
                "value": "3"
            },
            {
                "text": "Q4 2020",
                "value": "4"
            },
            {
                "text": "Annual 2020",
                "value": "5"
            }
        ],
        "pppPayrollTimePeriod": [
            {
                "text": "2019",
                "value": "2019"
            },
            {
                "text": "2020",
                "value": "2020"
            },
            {
                "text": "The one year before now",
                "value": "prior_year"
            },
            {
                "text": "For seasonal employers, a 12-week period between 2/15/2019 and 2/15/2020",
                "value": "seasonal"
            }
        ],
        "previousPppLoan": [
            {
                "text": "Yes, I received a PPP loan through BlueVine",
                "value": "0"
            },
            {
                "text": "Yes, I received a PPP loan from another entity",
                "value": "2"
            },
            {
                "text": "No, I have not received a PPP loan before",
                "value": "1"
            }
        ],
        "businessEntityTypePpp": [
            {
                "text": "Sole Proprietor",
                "value": "sole"
            },
            {
                "text": "Partnership",
                "value": "gp"
            },
            {
                "text": "C-Corp",
                "value": "ccorp"
            },
            {
                "text": "S-Corp",
                "value": "scorp"
            },
            {
                "text": "LLC",
                "value": "llc"
            },
            {
                "text": "Independent contractor",
                "value": "ic"
            },
            {
                "text": "Self-employed individual",
                "value": "sei"
            },
            {
                "text": "501(c)(3) nonprofit",
                "value": "nonp"
            },
            {
                "text": "501(c)(6) organization",
                "value": "nonp6"
            },
            {
                "text": "501(c)(19) veteran's organization",
                "value": "vo"
            },
            {
                "text": "Housing cooperative",
                "value": "housing_coop"
            },
            {
                "text": "Tribal business (section 31 SBA)",
                "value": "tb"
            }
        ],
        "loginUserRoles": [
            {
                "text": "Accountant",
                "value": "ACCOUNTANT"
            },
            {
                "text": "Administrator",
                "value": "ADMINISTRATOR"
            },
            {
                "text": "Authorized User",
                "value": "AUTHORIZED_USER"
            },
            {
                "text": "Viewer",
                "value": "VIEWER"
            },
            {
                "text": "Contributor",
                "value": "CONTRIBUTOR"
            }
        ],
        "loginUserRolesSelect": [
            {
                "text": "Accountant",
                "value": "ACCOUNTANT"
            },
            {
                "text": "Authorized User",
                "value": "AUTHORIZED_USER"
            },
            {
                "text": "Contributor",
                "value": "CONTRIBUTOR"
            }
        ],
        "demographicsVeteran": [
            {
                "text": "Non-Veteran",
                "value": "1"
            },
            {
                "text": "Veteran",
                "value": "2"
            },
            {
                "text": "Service-Disabled Veteran",
                "value": "3"
            },
            {
                "text": "Spouse of Veteran",
                "value": "4"
            },
            {
                "text": "Not Disclosed",
                "value": "X"
            }
        ],
        "demographicsGender": [
            {
                "text": "Male",
                "value": "M"
            },
            {
                "text": "Female",
                "value": "F"
            },
            {
                "text": "Not Disclosed",
                "value": "X"
            }
        ],
        "demographicsRace": [
            {
                "text": "American Indian or Alaska Native",
                "value": "1"
            },
            {
                "text": "Asian",
                "value": "2"
            },
            {
                "text": "Black or African-American",
                "value": "3"
            },
            {
                "text": "Native Hawaiian or Pacific Islander",
                "value": "4"
            },
            {
                "text": "White",
                "value": "5"
            },
            {
                "text": "Not Disclosed",
                "value": "X"
            }
        ],
        "demographicsEthnicity": [
            {
                "text": "Hispanic or Latino",
                "value": "H"
            },
            {
                "text": "Not Hispanic or Latino",
                "value": "N"
            },
            {
                "text": "Not Disclosed",
                "value": "X"
            }
        ],
        "pppLoanPurposeTypes": [
            {
                "text": "Payroll costs",
                "value": "payroll"
            },
            {
                "text": "Rent/Mortgage Interest",
                "value": "lease_mortgage_interest"
            },
            {
                "text": "Utilities",
                "value": "utilities"
            },
            {
                "text": "Covered Operations Expenditures",
                "value": "operations"
            },
            {
                "text": "Covered Property Damage",
                "value": "property_damage"
            },
            {
                "text": "Covered Supplier Costs",
                "value": "supplier_costs"
            },
            {
                "text": "Covered Worker Expenditures",
                "value": "worker_costs"
            }
        ],
        "payrollSchedule": [
            {
                "text": "Weekly",
                "value": "WEEKLY"
            },
            {
                "text": "Biweekly (every other week)",
                "value": "BIWEEKLY"
            },
            {
                "text": "Twice a month",
                "value": "TWICE_MONTHLY"
            },
            {
                "text": "Monthly",
                "value": "MONTHLY"
            },
            {
                "text": "Other",
                "value": "OTHER"
            }
        ]
    },
    "terms": {
        "updateCnt": 0,
        "ppp": {
            "show": false,
            "qualifiedAmount": 0,
            "provider": "",
            "annualRate": 0,
            "disbursementAmount": 0,
            "fundingDate": null,
            "repaymentStartDate": null,
            "defermentsMonths": null,
            "loanStatus": "",
            "applyForForgiveness": false
        },
        "checkingAccounts": {
            "show": false,
            "ddaCcToWireFlag": false
        },
        "showSlaCovid": false,
        "notifyFlexIncrease": false,
        "showIndustrySuspensionNotification": false,
        "flex": {
            "minimumDraw": 0,
            "creditLine": 0,
            "availableCredit": 0,
            "outstandingBalance": 0,
            "hasHistory": true,
            "flexSimpleInterestRate": 0,
            "flexTwelveEnabled": false,
            "hasFlexFundingAdvances": false,
            "hasFlexDeals": false,
            "initialDrawMinimum": 0,
            "termsAcceptance": "",
            "updatePaymentDueDateEnabled": true,
            "specialDrawEnabled": false,
            "hasSpecialDraw": false,
            "hasCatchUpDeal": false,
            "specialDrawOfferAmount": "0.0",
            "show": false,
            "recentDate": null,
            "recentAmount": 0,
            "recentSlug": "",
            "repayments": 12,
            "lastCatchUpDraw": {
                "drawNum": null,
                "partialPayoffAmount": null
            },
            "lastMissedRepaymentDraw": {
                "drawSlug": null,
                "many": null
            },
            "instantDraws": false,
            "suggestedFirstDealSet": null,
            "isEligibleForCli": false
        },
        "termLoan": {
            "show": false,
            "show_reports": false,
            "termLoansMethod": "ACH",
            "renewalOffers": false,
            "renewalRequests": false,
            "renewalDate": "",
            "lastCatchUpDraw": {
                "drawNum": null,
                "partialPayoffAmount": null
            }
        },
        "factoring": {
            "minimumInvoiceAdvance": 0,
            "creditLine": 0,
            "availableCredit": 0,
            "minWeeks": 0,
            "maxWeeks": 0,
            "hasHistory": true,
            "hasInvoices": false,
            "hasCustomers": false,
            "hasPassthrough": false,
            "fundthroughOptIn": false,
            "recentDeposit": {
                "slug": false,
                "amount": false,
                "date": false
            },
            "nextDatePayments": {
                "slug": false,
                "amount": false,
                "count": 0,
                "date": false
            },
            "unpaidInvoices": {
                "slug": false,
                "amount": 0,
                "count": 0
            },
            "termsAcceptance": "",
            "show": false,
            "outstandingInvoices": 0
        },
        "accountActivated": true,
        "advanceRateOverride": "0.0",
        "bluevineContracts": {
            "flex": {
                "lastSignDt": null,
                "signedCeltic": true,
                "resignRequired": false,
                "creditAuthorizationRequired": false
            },
            "factor": {
                "lastSignDt": null,
                "resignRequired": false,
                "oldHybridContract": false,
                "creditAuthorizationRequired": false
            }
        },
        "contractAccept": false,
        "contractsLastSignedDate": null,
        "contractMoveToS3Path": "",
        "contractMoveToS3Timestamp": null,
        "creditLine": "0.0",
        "customContract": false,
        "drawRepayments": 0,
        "dueExtension": "0.0",
        "factorTermsAcceptance": "",
        "flexCreditLine": "0.0",
        "flexTermsAcceptance": "",
        "flexTwelveApproved": null,
        "paymentDueDateUpdated": 0,
        "minDebtorLimit": "0.0",
        "terms": "",
        "termsLastUpdatedTime": null,
        "waiveDrawFee": false,
        "invoiceAdvanceRate": "0.0",
        "invoiceWeeklyRate": "0.0",
        "invoiceMinFee": "0.0",
        "invoiceLateFixedRate": "0.0",
        "invoiceLateDailyRate": "0.0",
        "invoiceVariableRate": false,
        "invoiceThirtyDayRate": false,
        "isInvoiceDailyRate": false,
        "drawWeeklyRate": "0.0",
        "drawMonthlyRate": "0.0",
        "drawFeePercent": "0.0",
        "drawLateDailyRate": "0.0",
        "drawFailedPaymentFee": 0,
        "drawFailedPaymentFeePercent": "0.0",
        "wireFee": 0,
        "achFee": 0,
        "maxFeeMultiple": 0,
        "eligibleForUpgrade": false,
        "clientPricingScore": 0,
        "runAutopricing": true,
        "invoicePriceCeiling": {
            "invoiceMinFee": 0,
            "invoiceWeeklyRate": 0
        },
        "drawPriceCeiling": {
            "drawFeePercent": 0,
            "drawWeeklyRate": 0,
            "drawMonthlyRate": 0
        },
        "disablePriceCeiling": false,
        "pgWaive": false,
        "lastCreditOfferTime": null,
        "availableCreditOffer": "",
        "availableCreditOfferUpdated": null,
        "specialDrawEnabled": false,
        "specialDrawOfferAmount": "0.0",
        "specialDrawRepayments": null,
        "drawTermMonths": 0,
        "standardRate": "0.0",
        "apr": "0.0",
        "previousFactoringCreditLine": "0.0",
        "previousFlexCreditLine": "0.0",
        "firstClSetDt": null,
        "ineligbleFromFlexToChecking": null,
        "showPromotionsPpp": false
    },
    "tasks": {
        "updateCnt": 2,
        "tasks": [
            {
                "created": "2020-11-15T08:15:30.487Z",
                "slug": "4aed3d398f6243a496da8b939f75aae3",
                "taskType": "BANK_CONNECTION",
                "requiredFor": "FUNDING",
                "status": "PENDING_CLIENT",
                "noteToClient": {},
                "category": "Funding",
                "offersSlugs": [],
                "bankProviderId": {},
                "bankAccountSlug": "de48045c896340b1adffad4a39c2895e",
                "userSubmittedDate": null,
                "businessEinTaxId": {},
                "updated": "2020-11-15T08:15:30.530Z"
            },
            {
                "created": "2019-07-04T08:33:13.933Z",
                "slug": "e7d55cc96cf24d7f9ae4ab45420dc529",
                "taskType": "BANK_DATA",
                "requiredFor": "UNDERWRITING",
                "status": "PENDING_CLIENT",
                "noteToClient": {},
                "category": "Review",
                "offersSlugs": [],
                "bankProviderId": {},
                "bankAccountSlug": {},
                "userSubmittedDate": null,
                "businessEinTaxId": {},
                "updated": "2019-07-04T08:33:13.951Z"
            }
        ],
        "clientTasks": [],
        "implicitTasks": [
            {
                "name": "additional user date of birth",
                "messageNum": 9018,
                "priority": 0,
                "reportCreated": "2023-01-17T09:29:40.920Z"
            },
            {
                "name": "Email Verification",
                "messageNum": 9000,
                "priority": 1,
                "reportCreated": "2023-01-17T09:29:40.920Z"
            }
        ],
        "infoTasks": [],
        "ddaApprovalRequestsCount": 0
    },
    "settings": {
        "updateCnt": 1
    },
    "messages": {
        "localMessages": [],
        "messages": [],
        "formBlocking": 0,
        "scrollBlock": 0
    },
    "promotions": {
        "promotionsList": [],
        "lastCompletedPromotion": null,
        "activateLinkError": false,
        "offerCreationError": false
    },
    "mfa": {
        "personalUserMobilePhoneNumber": "",
        "tokenSent": false,
        "showMFA": false,
        "isVerified": false,
        "isTrustedDevice": false,
        "isMFAVerified": false,
        "inModal": false,
        "phoneNumber": "",
        "isFetched": true
    },
    "legal": {
        "businessAddress": "",
        "businessAddressCity": "",
        "businessAddressState": "",
        "businessAddressZip": "",
        "businessEntityType": "",
        "legalName": "",
        "url": "",
        "pppPayrollTimePeriod": "",
        "pppRevenueReferenceQuarter": "",
        "pppRevenueTwentyTwentyQuarter": "",
        "pendingChanges": ""
    },
    "vendors": {
        "vendors": []
    },
    "banks": {
        "banks": [],
        "pendingMessage": {},
        "yodleeStatus": ""
    },
    "routing": {
        "count": 0
    },
    "offers": {
        "results": [],
        "acceptedProducts": [],
        "moveToInterstitialPage": false,
        "isCancelPPPApplication": false,
        "isFirstDrawSetFirstTime": false
    },
    "providers": {
        "qbdToken": null,
        "refreshInProgress": false,
        "refreshPromise": null
    },
    "ppp": {
        "updateCnt": 1,
        "forgivenesses": [],
        "wizardData": {},
        "canceledPPPApplication": false
    },
    "products": {
        "updateCnt": 1,
        "products": {
            "slug": "85a03a82e0324ac5a8b4d207ed24de83",
            "productName": "factoring",
            "productStatus": "closed",
            "productDetails": {
                "period": "weekly",
                "creditLimit": "123123.00000",
                "productType": "NON_NOTIFICATION"
            }
        },
        "allProducts": {
            "factoring": {
                "slug": "85a03a82e0324ac5a8b4d207ed24de83",
                "productName": "factoring",
                "productStatus": "closed",
                "productDetails": {
                    "period": "weekly",
                    "creditLimit": "123123.00000",
                    "productType": "NON_NOTIFICATION"
                }
            }
        },
        "showCoastalOptInModal": false,
        "showFundthroughOptInModal": false
    },
    "alerts": {
        "alertGroups": null
    },
    "apy": {
        "apyConfig": {
            "message": "Request failed with status code 403",
            "name": "AxiosError",
            "config": {
                "transitional": {
                    "silentJSONParsing": true,
                    "forcedJSONParsing": true,
                    "clarifyTimeoutError": false
                },
                "transformRequest": [
                    null
                ],
                "transformResponse": [
                    null
                ],
                "timeout": 1000000,
                "xsrfCookieName": "csrftoken",
                "xsrfHeaderName": "X-CSRFToken",
                "maxContentLength": -1,
                "maxBodyLength": -1,
                "env": {
                    "FormData": null
                },
                "headers": {
                    "Accept": "application/json, text/plain, */*",
                    "X-CLIENT-ROUTE": null,
                    "Content-Type": "application/json",
                    "X-CSRFToken": "evMxiErKn1q4wAHQ0pWo28Ta3GNpFnssz4PpJSX7jBuFGfCbAceuGtdxOk6ngKoS"
                },
                "baseURL": "",
                "withCredentials": true,
                "method": "get",
                "url": "/api/v3/dda-company/91884086586a46c79e1b01b57c5d0bb6/dda-user/1a6bb398110311ebaa330ab5d8f388d7/apy/config/",
                "data": "{}"
            },
            "code": "ERR_BAD_REQUEST",
            "status": 403
        }
    }
}