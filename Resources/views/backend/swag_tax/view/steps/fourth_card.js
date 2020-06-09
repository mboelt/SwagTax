/**
 * Shopware 5
 * Copyright (c) shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 */

//{namespace name=backend/swag_tax/main}
//{block name="backend/swag_tax/view/steps/fourth_card"}
Ext.define('Shopware.apps.SwagTax.view.steps.FourthCard', {

    extend: 'Ext.container.Container',
    id: 'card-3',

    // TODO: SNIPPETS
    initComponent: function () {
        this.items = [
            {
                xtype: 'fieldset',
                title: 'Direkt ausführen',
                items:  {
                    xtype: 'button',
                    cls: 'primary',
                    text: 'Jetzt ausführen (Batch Mode)'
                },
            },
            {
                xtype: 'fieldset',
                title: 'Planen',
                items: [
                    {
                        xtype: 'datefield',
                        name: 'scheduledDate',
                        fieldLabel: 'Planen um'
                    },
                    {
                        xtype: 'button',
                        cls: 'primary',
                        text: 'Speichern'
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});
//{/block}