var dbkfeature = {
    id: "dbkf",
    /**
     * URL naar een statisch boringen bestand in gml formaat
     */

    url: "/geoserver/zeeland/ows?",
    namespace: "zeeland",
    /**
     * Laag. Wordt geiniteerd met de functie dbkobject.show() kan worden overruled
     */
    highlightlayer: null,
    timer: null,
    showlabels: true,
    layer: null,
    currentCluster: [],
    selection: null,
    defaultStyle: new OpenLayers.Style({
        graphicWidth: "${mygraphicwidth}",
        graphicHeight: "${mygraphicheight}",
        fontColor: "${myfontcolor}",
        fontSize: "${myfontsize}",
        fontWeight: "${myfontweight}",
        externalGraphic: "${myicon}",
        label: "${labeltext}",
        labelSelect: true,
        labelAlign: "${mylabelalign}",
        labelBackgroundColor: "${labelbackground}",
        labelBorderColor: "${labelborder}",
        labelXOffset: "${mylabelxoffset}",
        labelYOffset: "${mylabelyoffset}"
    }, {
        context: {
            mygraphicheight: function(feature) {
                if (feature.cluster) {
                    if (feature.cluster.length < 10) {
                        return feature.cluster.length + 38;
                    } else if (feature.cluster.length > 10) {
                        return 49;
                    }
                } else {
                    return 38;
                }

            },
            mygraphicwidth: function(feature) {
                if (feature.cluster) {
                    if (feature.cluster.length < 10) {
                        return feature.cluster.length + 24;
                    } else if (feature.cluster.length > 10) {
                        return 35;
                    }
                } else {
                    return 24;
                }
            },
            myfontweight: function(feature) {
                if (feature.cluster) {
                    return "bold";
                } else {
                    return "normal";
                }
            },
            myfontsize: function(feature) {
                return "10.5px";
            },
            mylabelalign: function(feature) {
                if (feature.cluster) {
                    return "cc";
                } else {
                    return "rb";
                }
            },
            mylabelxoffset: function(feature) {
                if (feature.cluster) {
                    return 0;
                } else {
                    return -16;
                }
            },
            mylabelyoffset: function(feature) {
                if (feature.cluster) {
                    return -4;
                } else {
                    return -9;
                }
            },
            myfontcolor: function(feature) {
                if (feature.cluster) {
                    return "#ffffff";
                } else {
                    return "#000000";
                }
            },
            myicon: function(feature) {
                if (feature.cluster) {
                    return "images/building_1.png";
                } else {
                    if (map.zoom < 10) {
                        return "images/building_1.png";
                    } else {
                        return "images/building_1.png";
                    }
                }
            },
            labelbackground: function(feature) {
                if (feature.cluster) {
                    return;
                } else {
                    return "#ffeeff";
                }
            },
            labelborder: function(feature) {
                if (feature.cluster) {
                    return;
                } else {
                    return "#ff9999";
                }
            },
            labeltext: function(feature) {
                if (dbkfeature.showlabels) {
                    if (feature.cluster) {
                        var lbl_txt, c;
                        if (feature.cluster.length > 1) {
                            lbl_txt = feature.cluster.length + "";
                        } else {
                            //lbl_txt = feature.cluster[0].attributes.formelenaam;
                            lbl_txt = "";
                        }
                        return lbl_txt;
                    } else {
                        //return feature.attributes.formelenaam;
                        return "";
                    }
                } else {
                    return "";
                }
            }
        }
    }),
    selectStyle: new OpenLayers.Style({
        graphicWidth: "${mygraphicwidth}",
        graphicHeight: "${mygraphicheight}",
        fontColor: "${myfontcolor}",
        fontSize: "${myfontsize}",
        fontWeight: "${myfontweight}",
        externalGraphic: "${myicon}",
        label: "${labeltext}",
        labelSelect: true,
        labelAlign: "${mylabelalign}",
        labelBackgroundColor: "${labelbackground}",
        labelBorderColor: "${labelborder}",
        labelXOffset: "${mylabelxoffset}",
        labelYOffset: "${mylabelyoffset}"
    }, {
        context: {
            mygraphicheight: function(feature) {
                if (feature.cluster) {
                    if (feature.cluster.length < 10) {
                        return feature.cluster.length + 38;
                    } else if (feature.cluster.length > 10) {
                        return 49;
                    }
                } else {
                    return 38;
                }

            },
            mygraphicwidth: function(feature) {
                if (feature.cluster) {
                    if (feature.cluster.length < 10) {
                        return feature.cluster.length + 24;
                    } else if (feature.cluster.length > 10) {
                        return 35;
                    }
                } else {
                    return 24;
                }
            },
            myfontweight: function(feature) {
                if (feature.cluster) {
                    return "bold";
                } else {
                    return "normal";
                }
            },
            myfontsize: function(feature) {
                return "14px";
            },
            mylabelalign: function(feature) {
                if (feature.cluster) {
                    return "cc";
                } else {
                    return "rb";
                }
            },
            mylabelxoffset: function(feature) {
                if (feature.cluster) {
                    return 0;
                } else {
                    return -16;
                }
            },
            mylabelyoffset: function(feature) {
                if (feature.cluster) {
                    return -4;
                } else {
                    return -9;
                }
            },
            myfontcolor: function(feature) {
                if (feature.cluster) {
                    return "#fff722";
                } else {
                    return "#000000";
                }
            },
            myicon: function(feature) {
                if (feature.cluster) {
                    return "images/building_1.png";
                } else {
                    return "images/building_1.png";
                }
            },
            labelbackground: function(feature) {
                if (feature.cluster) {
                    return;
                } else {
                    return "#0048a0";
                }
            },
            labelborder: function(feature) {
                if (feature.cluster) {
                    return;
                } else {
                    return "#d3e7ff";
                }
            },
            labeltext: function(feature) {
                if (dbkfeature.showlabels) {
                    if (feature.cluster) {
                        var lbl_txt, c;
                        if (feature.cluster.length > 1) {
                            lbl_txt = feature.cluster.length + "";
                        } else {
                            //lbl_txt = feature.cluster[0].attributes.formelenaam;
                            lbl_txt = "";
                        }
                        return lbl_txt;
                    } else {
                        //return feature.attributes.formelenaam;
                        return "";
                    }
                } else {
                    return "";
                }
            }
        }
    }),
    /**
     * The layer that will hold the incidents
     */

    /**
     * The layer that will hold the incident sketches such as catchement areas and route
     */
    sketch: new OpenLayers.Layer.Vector("feature_sketch", {
        rendererOptions: {
            zIndexing: true
        }
    }),
    activateDBK: function(id) {
        //eenmalig afvuren wanneer een laag wordt geladen. Niet herhalen tijdens het in en uitzoomen!
        preparatie.updateFilter(id);
        preventie.updateFilter(id);
        gevaren.updateFilter(id);
        dbkobject.updateFilter(id);
        var feature;
        $.each(this.layer.features, function(fi, fv) {
            if (fv.cluster) {
                $.each(fv.cluster, function(ci, cv) {
                    if (cv.attributes.id.toString() === id) {
                        feature = cv;
                    }
                });
            }
            else {
                if (fv.attributes.id.toString() === id) {
                    feature = fv;
                }
            }
        });
        if (feature) {
            if (map.zoom < 13) {
                map.setCenter(feature.geometry.getBounds().getCenterLonLat(), 13);
            } else {
                map.setCenter(feature.geometry.getBounds().getCenterLonLat());
            }
        }

    },
    show: function() {
        this.layer = new OpenLayers.Layer.Vector("Feature", {
            rendererOptions: {
                zIndexing: true
            },
            strategies: [
                new OpenLayers.Strategy.Cluster({
                    distance: 60,
                    threshold: 2
                })
            ],
            minResolution: 1
        });
        this.layer.setZIndex(2006);
        this.sketch.setZIndex(2002);
        this.layer.styleMap = new OpenLayers.StyleMap({
            'default': this.defaultStyle,
            'select': this.selectStyle
        }),
        this.layer.displayInLayerSwitcher = false;
        this.sketch.displayInLayerSwitcher = false;
        map.addLayers([this.sketch, this.layer]);
        this.layer.events.on({
            "featureselected": this.getfeatureinfo,
            "featuresadded": function() {
                if (typeof(dbk) !== "undefined" && dbk !== '') {
                    dbkfeature.activateDBK(dbk);
                    //release the dbk object
                    dbk = '';
                }

            },
            "featureunselected": function(e) {
                $('#infopanel').hide();
                if ($('#tb03').hasClass('active')) {
                    $('#tb03').removeClass('active');
                }
            }
        });
        this.get();
    },
    get: function() {
        var mydata = {};
        mydata.bbox = map.getExtent().toBBOX(0);
        mydata.time = new Date().getTime();
        mydata.service = "WFS";
        mydata.version = "1.0.0";
        mydata.request = "GetFeature";
        mydata.typename = this.namespace + ":dbkfeature_centroid";
        mydata.maxFeatures = 500;
        mydata.outputFormat = "json";
        //http://safetymaps.nl/geoserver/brabantnoord/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=brabantnoord:dbkfeature_centroid&maxFeatures=50&outputFormat=json
        var _this = this;
        $.ajax({
            type: "GET",
            url: this.url,
            data: mydata,
            dataType: "json",
            success: function(data) {
                var geojson_format = new OpenLayers.Format.GeoJSON();
                _this.layer.addFeatures(geojson_format.read(data));
            },
            error: function() {
                return false;
            },
            complete: function() {
                return false;
            }
        });
    },
    featureInfohtml: function(feature) {
        var ret_tr = $('<tr></tr>');
        var ret_title = $('<td></td>');
        ret_tr.append(ret_title);
        ret_title.append('<a href="?regio=' + regio.id + '&dbk=' + feature.attributes.id + '" class="infofieldtitle">' + feature.attributes.formelenaam + '</a>&nbsp;');
        //var ret_val = $('<td class="dbk_feature" id="dbk_' + feature.attributes.id + '"></td>');
        //ret_val.html(feature.attributes.formelenaam);
        //ret_tr.append(ret_val);

        $(ret_tr).click(function() {
            preparatie.updateFilter(feature.attributes.id);
            preventie.updateFilter(feature.attributes.id);
            gevaren.updateFilter(feature.attributes.id);
            dbkobject.updateFilter(feature.attributes.id);
            if (map.zoom < 13) {
                map.setCenter(feature.geometry.getBounds().getCenterLonLat(), 13);
            } else {
                map.setCenter(feature.geometry.getBounds().getCenterLonLat());
            }
            return false;
        });
        return ret_tr;
    },
    zoomToFeature: function(feature) {
        preparatie.updateFilter(feature.attributes.id);
        preventie.updateFilter(feature.attributes.id);
        gevaren.updateFilter(feature.attributes.id);
        dbkobject.updateFilter(feature.attributes.id);
        if (map.zoom < 13) {
            map.setCenter(feature.geometry.getBounds().getCenterLonLat(), 13);
        } else {
            map.setCenter(feature.geometry.getBounds().getCenterLonLat());
        }
    },
    getfeatureinfo: function(e) {
        if (typeof(e.feature) !== "undefined") {
            $('#infopanel').html('');
            if (e.feature.cluster) {
                if (e.feature.cluster.length === 1) {
                    dbkfeature.zoomToFeature(e.feature.cluster[0]);
                } else {
                    $('#infopanel').append('<div style="float:left;width:100%;"><table id="Searchresult"></table></div>');
                    $('#infopanel').append('<div id="Pagination" class="pagination" style="float:left;"></div>');
                    dbkfeature.currentCluster = e.feature.cluster;
                    $("#Pagination").pagination(e.feature.cluster.length, {
                        items_per_page: 20,
                        callback: function(page_index, jq) {
                            // Get number of elements per pagionation page from form
                            var items_per_page = 20;
                            var max_elem = Math.min((page_index + 1) * items_per_page, dbkfeature.currentCluster.length);

                            // Iterate through a selection of the content and build an HTML string
                            $('#Searchresult').html('');
                            for (var i = page_index * items_per_page; i < max_elem; i++)
                            {
                                $('#Searchresult').append(dbkfeature.featureInfohtml(dbkfeature.currentCluster[i]));
                            }
                        }
                    });
                    $('#infopanel').show(true);
                    if (!$('#tb03').hasClass('active')) {
                        $('#tb03').addClass('active');
                    }
                }
            } else {
                //$('#infopanel').append('<div style="float:left;width:100%;"><table id="Searchresult"></table></div>');
                //$('#Searchresult').append(dbkfeature.featureInfohtml(e.feature));
                dbkfeature.currentCluster = [];
                dbkfeature.zoomToFeature(e.feature);
                $('#infopanel').hide();
                if ($('#tb03').hasClass('active')) {
                    $('#tb03').removeClass('active');
                }
            }
        }
    }
};
modules.push(dbkfeature);
