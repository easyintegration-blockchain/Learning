"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyDefinition = exports.PipelineDefinition = exports.PausableDefinition = exports.PackageScanDefinition = exports.OutputTypeDefinition = exports.OutputDefinition = exports.OtherwiseDefinition = exports.OptimisticLockRetryPolicyDefinition = exports.OnFallbackDefinition = exports.OnExceptionDefinition = exports.OnCompletionDefinition = exports.MulticastDefinition = exports.MarshalDefinition = exports.LoopDefinition = exports.LogDefinition = exports.LoadBalanceDefinition = exports.KameletDefinition = exports.InterceptSendToEndpointDefinition = exports.InterceptFromDefinition = exports.InterceptDefinition = exports.InputTypeDefinition = exports.InOutDefinition = exports.InOnlyDefinition = exports.IdempotentConsumerDefinition = exports.GlobalOptionsDefinition = exports.GlobalOptionDefinition = exports.FromDefinition = exports.FinallyDefinition = exports.FilterDefinition = exports.FaultToleranceConfigurationDefinition = exports.ExpressionSubElementDefinition = exports.ErrorHandlerDefinition = exports.EnrichDefinition = exports.DynamicRouterDefinition = exports.DescriptionDefinition = exports.DelayDefinition = exports.DataFormatDefinition = exports.ConvertBodyDefinition = exports.ContextScanDefinition = exports.ClaimCheckDefinition = exports.CircuitBreakerDefinition = exports.ChoiceDefinition = exports.CatchDefinition = exports.BeanDefinition = exports.AggregateDefinition = exports.OutputAwareFromDefinition = exports.NamedBeanDefinition = exports.ErrorHandlerBuilderDeserializer = exports.BeansDeserializer = exports.ProcessorDefinition = void 0;
exports.ValidateDefinition = exports.UnmarshalDefinition = exports.TryDefinition = exports.TransformDefinition = exports.TransactedDefinition = exports.ToDynamicDefinition = exports.ToDefinition = exports.ThrowExceptionDefinition = exports.ThrottleDefinition = exports.ThreadsDefinition = exports.ThreadPoolProfileDefinition = exports.TemplatedRouteParameterDefinition = exports.TemplatedRouteDefinition = exports.TemplatedRouteBeanDefinition = exports.StopDefinition = exports.StepDefinition = exports.SplitDefinition = exports.SortDefinition = exports.SetPropertyDefinition = exports.SetHeaderDefinition = exports.SetExchangePatternDefinition = exports.SetBodyDefinition = exports.ScriptDefinition = exports.SamplingDefinition = exports.SagaDefinition = exports.SagaActionUriDefinition = exports.RoutingSlipDefinition = exports.RouteTemplateParameterDefinition = exports.RouteTemplateDefinition = exports.RouteTemplateBeanDefinition = exports.RouteDefinition = exports.RouteContextRefDefinition = exports.RouteConfigurationDefinition = exports.RouteConfigurationContextRefDefinition = exports.RouteBuilderDefinition = exports.RollbackDefinition = exports.ResumableDefinition = exports.RestContextRefDefinition = exports.Resilience4jConfigurationDefinition = exports.ResequenceDefinition = exports.RemovePropertyDefinition = exports.RemovePropertiesDefinition = exports.RemoveHeadersDefinition = exports.RemoveHeaderDefinition = exports.RedeliveryPolicyDefinition = exports.RecipientListDefinition = exports.PropertyExpressionDefinition = exports.PropertyDefinition = exports.ProcessDefinition = exports.PollEnrichDefinition = void 0;
exports.PGPDataFormat = exports.MimeMultipartDataFormat = exports.LZFDataFormat = exports.JsonDataFormat = exports.JsonApiDataFormat = exports.JaxbDataFormat = exports.JacksonXMLDataFormat = exports.IcalDataFormat = exports.HL7DataFormat = exports.GzipDeflaterDataFormat = exports.GrokDataFormat = exports.FlatpackDataFormat = exports.FhirXmlDataFormat = exports.FhirJsonDataFormat = exports.DataFormatsDefinition = exports.CustomDataFormat = exports.CsvDataFormat = exports.CryptoDataFormat = exports.CBORDataFormat = exports.BindyDataFormat = exports.Base64DataFormat = exports.BarcodeDataFormat = exports.AvroDataFormat = exports.Any23DataFormat = exports.ASN1DataFormat = exports.StreamResequencerConfig = exports.BatchResequencerConfig = exports.ZooKeeperServiceCallServiceDiscoveryConfiguration = exports.StaticServiceCallServiceDiscoveryConfiguration = exports.ServiceCallServiceLoadBalancerConfiguration = exports.ServiceCallServiceFilterConfiguration = exports.ServiceCallServiceDiscoveryConfiguration = exports.ServiceCallServiceChooserConfiguration = exports.ServiceCallExpressionConfiguration = exports.ServiceCallDefinition = exports.ServiceCallConfigurationDefinition = exports.PassThroughServiceCallServiceFilterConfiguration = exports.KubernetesServiceCallServiceDiscoveryConfiguration = exports.HealthyServiceCallServiceFilterConfiguration = exports.DnsServiceCallServiceDiscoveryConfiguration = exports.DefaultServiceCallServiceLoadBalancerConfiguration = exports.CustomServiceCallServiceFilterConfiguration = exports.ConsulServiceCallServiceDiscoveryConfiguration = exports.CombinedServiceCallServiceFilterConfiguration = exports.CombinedServiceCallServiceDiscoveryConfiguration = exports.CachingServiceCallServiceDiscoveryConfiguration = exports.BlacklistServiceCallServiceFilterConfiguration = exports.WireTapDefinition = exports.WhenSkipSendToEndpointDefinition = exports.WhenDefinition = void 0;
exports.StickyLoadBalancerDefinition = exports.RoundRobinLoadBalancerDefinition = exports.RandomLoadBalancerDefinition = exports.FailoverLoadBalancerDefinition = exports.CustomLoadBalancerDefinition = exports.XQueryExpression = exports.XPathExpression = exports.XMLTokenizerExpression = exports.TokenizerExpression = exports.SpELExpression = exports.SimpleExpression = exports.RefExpression = exports.OgnlExpression = exports.MvelExpression = exports.MethodCallExpression = exports.LanguageExpression = exports.JsonPathExpression = exports.JqExpression = exports.JoorExpression = exports.Hl7TerserExpression = exports.HeaderExpression = exports.GroovyExpression = exports.ExpressionDefinition = exports.ExchangePropertyExpression = exports.DatasonnetExpression = exports.ConstantExpression = exports.CSimpleExpression = exports.SpringTransactionErrorHandlerDefinition = exports.NoErrorHandlerDefinition = exports.JtaTransactionErrorHandlerDefinition = exports.ErrorHandlerRefDefinition = exports.DefaultErrorHandlerDefinition = exports.DeadLetterChannelDefinition = exports.ZipFileDataFormat = exports.ZipDeflaterDataFormat = exports.YAMLTypeFilterDefinition = exports.YAMLDataFormat = exports.XStreamDataFormat = exports.XMLSecurityDataFormat = exports.UniVocityTsvDataFormat = exports.UniVocityHeader = exports.UniVocityFixedDataFormat = exports.UniVocityCsvDataFormat = exports.TidyMarkupDataFormat = exports.ThriftDataFormat = exports.TarFileDataFormat = exports.SyslogDataFormat = exports.SoapDataFormat = exports.RssDataFormat = exports.ProtobufDataFormat = void 0;
exports.ValidatorsDefinition = exports.PredicateValidatorDefinition = exports.EndpointValidatorDefinition = exports.CustomValidatorDefinition = exports.TransformersDefinition = exports.EndpointTransformerDefinition = exports.DataFormatTransformerDefinition = exports.CustomTransformerDefinition = exports.SecurityDefinition = exports.RestsDefinition = exports.RestSecuritiesDefinition = exports.RestPropertyDefinition = exports.RestDefinition = exports.RestConfigurationDefinition = exports.RestBindingDefinition = exports.ResponseMessageDefinition = exports.ResponseHeaderDefinition = exports.PutDefinition = exports.PostDefinition = exports.PatchDefinition = exports.ParamDefinition = exports.OpenIdConnectDefinition = exports.OAuth2Definition = exports.MutualTLSDefinition = exports.HeadDefinition = exports.GetDefinition = exports.DeleteDefinition = exports.BearerTokenDefinition = exports.BasicAuthDefinition = exports.ApiKeyDefinition = exports.WeightedLoadBalancerDefinition = exports.TopicLoadBalancerDefinition = void 0;
/**
 * Generated by karavan build tools - do NOT edit this file!
 */
var IntegrationDefinition_1 = require("./IntegrationDefinition");
var ProcessorDefinition = /** @class */ (function (_super) {
    __extends(ProcessorDefinition, _super);
    function ProcessorDefinition(init) {
        var _this = _super.call(this, 'ProcessorDefinition') || this;
        _this.stepName = 'processor';
        Object.assign(_this, init);
        return _this;
    }
    return ProcessorDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ProcessorDefinition = ProcessorDefinition;
var BeansDeserializer = /** @class */ (function (_super) {
    __extends(BeansDeserializer, _super);
    function BeansDeserializer(init) {
        var _this = _super.call(this, 'BeansDeserializer') || this;
        Object.assign(_this, init);
        return _this;
    }
    return BeansDeserializer;
}(IntegrationDefinition_1.CamelElement));
exports.BeansDeserializer = BeansDeserializer;
var ErrorHandlerBuilderDeserializer = /** @class */ (function (_super) {
    __extends(ErrorHandlerBuilderDeserializer, _super);
    function ErrorHandlerBuilderDeserializer(init) {
        var _this = _super.call(this, 'ErrorHandlerBuilderDeserializer') || this;
        Object.assign(_this, init);
        return _this;
    }
    return ErrorHandlerBuilderDeserializer;
}(IntegrationDefinition_1.CamelElement));
exports.ErrorHandlerBuilderDeserializer = ErrorHandlerBuilderDeserializer;
var NamedBeanDefinition = /** @class */ (function (_super) {
    __extends(NamedBeanDefinition, _super);
    function NamedBeanDefinition(init) {
        var _this = _super.call(this, 'NamedBeanDefinition') || this;
        _this.name = '';
        _this.type = '';
        _this.properties = {};
        Object.assign(_this, init);
        return _this;
    }
    return NamedBeanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.NamedBeanDefinition = NamedBeanDefinition;
var OutputAwareFromDefinition = /** @class */ (function (_super) {
    __extends(OutputAwareFromDefinition, _super);
    function OutputAwareFromDefinition(init) {
        var _this = _super.call(this, 'OutputAwareFromDefinition') || this;
        _this.parameters = {};
        _this.steps = [];
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return OutputAwareFromDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OutputAwareFromDefinition = OutputAwareFromDefinition;
var AggregateDefinition = /** @class */ (function (_super) {
    __extends(AggregateDefinition, _super);
    function AggregateDefinition(init) {
        var _this = _super.call(this, 'AggregateDefinition') || this;
        _this.aggregationStrategy = '';
        _this.stepName = 'aggregate';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return AggregateDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.AggregateDefinition = AggregateDefinition;
var BeanDefinition = /** @class */ (function (_super) {
    __extends(BeanDefinition, _super);
    function BeanDefinition(init) {
        var _this = _super.call(this, 'BeanDefinition') || this;
        _this.stepName = 'bean';
        Object.assign(_this, init);
        return _this;
    }
    return BeanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.BeanDefinition = BeanDefinition;
var CatchDefinition = /** @class */ (function (_super) {
    __extends(CatchDefinition, _super);
    function CatchDefinition(init) {
        var _this = _super.call(this, 'CatchDefinition') || this;
        _this.exception = [];
        _this.stepName = 'doCatch';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return CatchDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.CatchDefinition = CatchDefinition;
var ChoiceDefinition = /** @class */ (function (_super) {
    __extends(ChoiceDefinition, _super);
    function ChoiceDefinition(init) {
        var _this = _super.call(this, 'ChoiceDefinition') || this;
        _this.stepName = 'choice';
        _this.when = [];
        Object.assign(_this, init);
        return _this;
    }
    return ChoiceDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ChoiceDefinition = ChoiceDefinition;
var CircuitBreakerDefinition = /** @class */ (function (_super) {
    __extends(CircuitBreakerDefinition, _super);
    function CircuitBreakerDefinition(init) {
        var _this = _super.call(this, 'CircuitBreakerDefinition') || this;
        _this.stepName = 'circuitBreaker';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return CircuitBreakerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.CircuitBreakerDefinition = CircuitBreakerDefinition;
var ClaimCheckDefinition = /** @class */ (function (_super) {
    __extends(ClaimCheckDefinition, _super);
    function ClaimCheckDefinition(init) {
        var _this = _super.call(this, 'ClaimCheckDefinition') || this;
        _this.stepName = 'claimCheck';
        _this.operation = '';
        Object.assign(_this, init);
        return _this;
    }
    return ClaimCheckDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ClaimCheckDefinition = ClaimCheckDefinition;
var ContextScanDefinition = /** @class */ (function (_super) {
    __extends(ContextScanDefinition, _super);
    function ContextScanDefinition(init) {
        var _this = _super.call(this, 'ContextScanDefinition') || this;
        _this.excludes = [];
        _this.stepName = 'contextScan';
        _this.includes = [];
        Object.assign(_this, init);
        return _this;
    }
    return ContextScanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ContextScanDefinition = ContextScanDefinition;
var ConvertBodyDefinition = /** @class */ (function (_super) {
    __extends(ConvertBodyDefinition, _super);
    function ConvertBodyDefinition(init) {
        var _this = _super.call(this, 'ConvertBodyDefinition') || this;
        _this.stepName = 'convertBodyTo';
        _this.type = '';
        Object.assign(_this, init);
        return _this;
    }
    return ConvertBodyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ConvertBodyDefinition = ConvertBodyDefinition;
var DataFormatDefinition = /** @class */ (function (_super) {
    __extends(DataFormatDefinition, _super);
    function DataFormatDefinition(init) {
        var _this = _super.call(this, 'DataFormatDefinition') || this;
        _this.stepName = 'dataFormat';
        Object.assign(_this, init);
        return _this;
    }
    return DataFormatDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DataFormatDefinition = DataFormatDefinition;
var DelayDefinition = /** @class */ (function (_super) {
    __extends(DelayDefinition, _super);
    function DelayDefinition(init) {
        var _this = _super.call(this, 'DelayDefinition') || this;
        _this.stepName = 'delay';
        Object.assign(_this, init);
        return _this;
    }
    return DelayDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DelayDefinition = DelayDefinition;
var DescriptionDefinition = /** @class */ (function (_super) {
    __extends(DescriptionDefinition, _super);
    function DescriptionDefinition(init) {
        var _this = _super.call(this, 'DescriptionDefinition') || this;
        _this.stepName = 'description';
        Object.assign(_this, init);
        return _this;
    }
    return DescriptionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DescriptionDefinition = DescriptionDefinition;
var DynamicRouterDefinition = /** @class */ (function (_super) {
    __extends(DynamicRouterDefinition, _super);
    function DynamicRouterDefinition(init) {
        var _this = _super.call(this, 'DynamicRouterDefinition') || this;
        _this.stepName = 'dynamicRouter';
        Object.assign(_this, init);
        return _this;
    }
    return DynamicRouterDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DynamicRouterDefinition = DynamicRouterDefinition;
var EnrichDefinition = /** @class */ (function (_super) {
    __extends(EnrichDefinition, _super);
    function EnrichDefinition(init) {
        var _this = _super.call(this, 'EnrichDefinition') || this;
        _this.stepName = 'enrich';
        Object.assign(_this, init);
        return _this;
    }
    return EnrichDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.EnrichDefinition = EnrichDefinition;
var ErrorHandlerDefinition = /** @class */ (function (_super) {
    __extends(ErrorHandlerDefinition, _super);
    function ErrorHandlerDefinition(init) {
        var _this = _super.call(this, 'ErrorHandlerDefinition') || this;
        _this.stepName = 'errorHandler';
        Object.assign(_this, init);
        return _this;
    }
    return ErrorHandlerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ErrorHandlerDefinition = ErrorHandlerDefinition;
var ExpressionSubElementDefinition = /** @class */ (function (_super) {
    __extends(ExpressionSubElementDefinition, _super);
    function ExpressionSubElementDefinition(init) {
        var _this = _super.call(this, 'ExpressionSubElementDefinition') || this;
        _this.stepName = 'expressionSubElement';
        Object.assign(_this, init);
        return _this;
    }
    return ExpressionSubElementDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ExpressionSubElementDefinition = ExpressionSubElementDefinition;
var FaultToleranceConfigurationDefinition = /** @class */ (function (_super) {
    __extends(FaultToleranceConfigurationDefinition, _super);
    function FaultToleranceConfigurationDefinition(init) {
        var _this = _super.call(this, 'FaultToleranceConfigurationDefinition') || this;
        _this.stepName = 'faultToleranceConfiguration';
        Object.assign(_this, init);
        return _this;
    }
    return FaultToleranceConfigurationDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.FaultToleranceConfigurationDefinition = FaultToleranceConfigurationDefinition;
var FilterDefinition = /** @class */ (function (_super) {
    __extends(FilterDefinition, _super);
    function FilterDefinition(init) {
        var _this = _super.call(this, 'FilterDefinition') || this;
        _this.stepName = 'filter';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return FilterDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.FilterDefinition = FilterDefinition;
var FinallyDefinition = /** @class */ (function (_super) {
    __extends(FinallyDefinition, _super);
    function FinallyDefinition(init) {
        var _this = _super.call(this, 'FinallyDefinition') || this;
        _this.stepName = 'doFinally';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return FinallyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.FinallyDefinition = FinallyDefinition;
var FromDefinition = /** @class */ (function (_super) {
    __extends(FromDefinition, _super);
    function FromDefinition(init) {
        var _this = _super.call(this, 'FromDefinition') || this;
        _this.stepName = 'from';
        _this.parameters = {};
        _this.steps = [];
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return FromDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.FromDefinition = FromDefinition;
var GlobalOptionDefinition = /** @class */ (function (_super) {
    __extends(GlobalOptionDefinition, _super);
    function GlobalOptionDefinition(init) {
        var _this = _super.call(this, 'GlobalOptionDefinition') || this;
        _this.stepName = 'globalOption';
        _this.value = '';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return GlobalOptionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.GlobalOptionDefinition = GlobalOptionDefinition;
var GlobalOptionsDefinition = /** @class */ (function (_super) {
    __extends(GlobalOptionsDefinition, _super);
    function GlobalOptionsDefinition(init) {
        var _this = _super.call(this, 'GlobalOptionsDefinition') || this;
        _this.stepName = 'globalOptions';
        _this.globalOption = [];
        Object.assign(_this, init);
        return _this;
    }
    return GlobalOptionsDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.GlobalOptionsDefinition = GlobalOptionsDefinition;
var IdempotentConsumerDefinition = /** @class */ (function (_super) {
    __extends(IdempotentConsumerDefinition, _super);
    function IdempotentConsumerDefinition(init) {
        var _this = _super.call(this, 'IdempotentConsumerDefinition') || this;
        _this.stepName = 'idempotentConsumer';
        _this.idempotentRepository = '';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return IdempotentConsumerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.IdempotentConsumerDefinition = IdempotentConsumerDefinition;
var InOnlyDefinition = /** @class */ (function (_super) {
    __extends(InOnlyDefinition, _super);
    function InOnlyDefinition(init) {
        var _this = _super.call(this, 'InOnlyDefinition') || this;
        _this.stepName = 'inOnly';
        _this.parameters = {};
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return InOnlyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InOnlyDefinition = InOnlyDefinition;
var InOutDefinition = /** @class */ (function (_super) {
    __extends(InOutDefinition, _super);
    function InOutDefinition(init) {
        var _this = _super.call(this, 'InOutDefinition') || this;
        _this.stepName = 'inOut';
        _this.parameters = {};
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return InOutDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InOutDefinition = InOutDefinition;
var InputTypeDefinition = /** @class */ (function (_super) {
    __extends(InputTypeDefinition, _super);
    function InputTypeDefinition(init) {
        var _this = _super.call(this, 'InputTypeDefinition') || this;
        _this.urn = '';
        _this.stepName = 'inputType';
        Object.assign(_this, init);
        return _this;
    }
    return InputTypeDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InputTypeDefinition = InputTypeDefinition;
var InterceptDefinition = /** @class */ (function (_super) {
    __extends(InterceptDefinition, _super);
    function InterceptDefinition(init) {
        var _this = _super.call(this, 'InterceptDefinition') || this;
        _this.stepName = 'intercept';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return InterceptDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InterceptDefinition = InterceptDefinition;
var InterceptFromDefinition = /** @class */ (function (_super) {
    __extends(InterceptFromDefinition, _super);
    function InterceptFromDefinition(init) {
        var _this = _super.call(this, 'InterceptFromDefinition') || this;
        _this.stepName = 'interceptFrom';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return InterceptFromDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InterceptFromDefinition = InterceptFromDefinition;
var InterceptSendToEndpointDefinition = /** @class */ (function (_super) {
    __extends(InterceptSendToEndpointDefinition, _super);
    function InterceptSendToEndpointDefinition(init) {
        var _this = _super.call(this, 'InterceptSendToEndpointDefinition') || this;
        _this.stepName = 'interceptSendToEndpoint';
        _this.steps = [];
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return InterceptSendToEndpointDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.InterceptSendToEndpointDefinition = InterceptSendToEndpointDefinition;
var KameletDefinition = /** @class */ (function (_super) {
    __extends(KameletDefinition, _super);
    function KameletDefinition(init) {
        var _this = _super.call(this, 'KameletDefinition') || this;
        _this.stepName = 'kamelet';
        _this.name = '';
        _this.parameters = {};
        Object.assign(_this, init);
        return _this;
    }
    return KameletDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.KameletDefinition = KameletDefinition;
var LoadBalanceDefinition = /** @class */ (function (_super) {
    __extends(LoadBalanceDefinition, _super);
    function LoadBalanceDefinition(init) {
        var _this = _super.call(this, 'LoadBalanceDefinition') || this;
        _this.stepName = 'loadBalance';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return LoadBalanceDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.LoadBalanceDefinition = LoadBalanceDefinition;
var LogDefinition = /** @class */ (function (_super) {
    __extends(LogDefinition, _super);
    function LogDefinition(init) {
        var _this = _super.call(this, 'LogDefinition') || this;
        _this.stepName = 'log';
        _this.message = '';
        Object.assign(_this, init);
        return _this;
    }
    return LogDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.LogDefinition = LogDefinition;
var LoopDefinition = /** @class */ (function (_super) {
    __extends(LoopDefinition, _super);
    function LoopDefinition(init) {
        var _this = _super.call(this, 'LoopDefinition') || this;
        _this.stepName = 'loop';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return LoopDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.LoopDefinition = LoopDefinition;
var MarshalDefinition = /** @class */ (function (_super) {
    __extends(MarshalDefinition, _super);
    function MarshalDefinition(init) {
        var _this = _super.call(this, 'MarshalDefinition') || this;
        _this.stepName = 'marshal';
        Object.assign(_this, init);
        return _this;
    }
    return MarshalDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.MarshalDefinition = MarshalDefinition;
var MulticastDefinition = /** @class */ (function (_super) {
    __extends(MulticastDefinition, _super);
    function MulticastDefinition(init) {
        var _this = _super.call(this, 'MulticastDefinition') || this;
        _this.steps = [];
        _this.stepName = 'multicast';
        Object.assign(_this, init);
        return _this;
    }
    return MulticastDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.MulticastDefinition = MulticastDefinition;
var OnCompletionDefinition = /** @class */ (function (_super) {
    __extends(OnCompletionDefinition, _super);
    function OnCompletionDefinition(init) {
        var _this = _super.call(this, 'OnCompletionDefinition') || this;
        _this.stepName = 'onCompletion';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return OnCompletionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OnCompletionDefinition = OnCompletionDefinition;
var OnExceptionDefinition = /** @class */ (function (_super) {
    __extends(OnExceptionDefinition, _super);
    function OnExceptionDefinition(init) {
        var _this = _super.call(this, 'OnExceptionDefinition') || this;
        _this.exception = [];
        _this.steps = [];
        _this.stepName = 'onException';
        Object.assign(_this, init);
        return _this;
    }
    return OnExceptionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OnExceptionDefinition = OnExceptionDefinition;
var OnFallbackDefinition = /** @class */ (function (_super) {
    __extends(OnFallbackDefinition, _super);
    function OnFallbackDefinition(init) {
        var _this = _super.call(this, 'OnFallbackDefinition') || this;
        _this.stepName = 'onFallback';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return OnFallbackDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OnFallbackDefinition = OnFallbackDefinition;
var OptimisticLockRetryPolicyDefinition = /** @class */ (function (_super) {
    __extends(OptimisticLockRetryPolicyDefinition, _super);
    function OptimisticLockRetryPolicyDefinition(init) {
        var _this = _super.call(this, 'OptimisticLockRetryPolicyDefinition') || this;
        _this.stepName = 'optimisticLockRetryPolicy';
        Object.assign(_this, init);
        return _this;
    }
    return OptimisticLockRetryPolicyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OptimisticLockRetryPolicyDefinition = OptimisticLockRetryPolicyDefinition;
var OtherwiseDefinition = /** @class */ (function (_super) {
    __extends(OtherwiseDefinition, _super);
    function OtherwiseDefinition(init) {
        var _this = _super.call(this, 'OtherwiseDefinition') || this;
        _this.stepName = 'otherwise';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return OtherwiseDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OtherwiseDefinition = OtherwiseDefinition;
var OutputDefinition = /** @class */ (function (_super) {
    __extends(OutputDefinition, _super);
    function OutputDefinition(init) {
        var _this = _super.call(this, 'OutputDefinition') || this;
        _this.stepName = 'output';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return OutputDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OutputDefinition = OutputDefinition;
var OutputTypeDefinition = /** @class */ (function (_super) {
    __extends(OutputTypeDefinition, _super);
    function OutputTypeDefinition(init) {
        var _this = _super.call(this, 'OutputTypeDefinition') || this;
        _this.urn = '';
        _this.stepName = 'outputType';
        Object.assign(_this, init);
        return _this;
    }
    return OutputTypeDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OutputTypeDefinition = OutputTypeDefinition;
var PackageScanDefinition = /** @class */ (function (_super) {
    __extends(PackageScanDefinition, _super);
    function PackageScanDefinition(init) {
        var _this = _super.call(this, 'PackageScanDefinition') || this;
        _this.excludes = [];
        _this.package = [];
        _this.stepName = 'packageScan';
        _this.includes = [];
        Object.assign(_this, init);
        return _this;
    }
    return PackageScanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PackageScanDefinition = PackageScanDefinition;
var PausableDefinition = /** @class */ (function (_super) {
    __extends(PausableDefinition, _super);
    function PausableDefinition(init) {
        var _this = _super.call(this, 'PausableDefinition') || this;
        _this.untilCheck = '';
        _this.stepName = 'pausable';
        _this.consumerListener = '';
        Object.assign(_this, init);
        return _this;
    }
    return PausableDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PausableDefinition = PausableDefinition;
var PipelineDefinition = /** @class */ (function (_super) {
    __extends(PipelineDefinition, _super);
    function PipelineDefinition(init) {
        var _this = _super.call(this, 'PipelineDefinition') || this;
        _this.stepName = 'pipeline';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return PipelineDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PipelineDefinition = PipelineDefinition;
var PolicyDefinition = /** @class */ (function (_super) {
    __extends(PolicyDefinition, _super);
    function PolicyDefinition(init) {
        var _this = _super.call(this, 'PolicyDefinition') || this;
        _this.ref = '';
        _this.stepName = 'policy';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return PolicyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PolicyDefinition = PolicyDefinition;
var PollEnrichDefinition = /** @class */ (function (_super) {
    __extends(PollEnrichDefinition, _super);
    function PollEnrichDefinition(init) {
        var _this = _super.call(this, 'PollEnrichDefinition') || this;
        _this.stepName = 'pollEnrich';
        Object.assign(_this, init);
        return _this;
    }
    return PollEnrichDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PollEnrichDefinition = PollEnrichDefinition;
var ProcessDefinition = /** @class */ (function (_super) {
    __extends(ProcessDefinition, _super);
    function ProcessDefinition(init) {
        var _this = _super.call(this, 'ProcessDefinition') || this;
        _this.ref = '';
        _this.stepName = 'process';
        Object.assign(_this, init);
        return _this;
    }
    return ProcessDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ProcessDefinition = ProcessDefinition;
var PropertyDefinition = /** @class */ (function (_super) {
    __extends(PropertyDefinition, _super);
    function PropertyDefinition(init) {
        var _this = _super.call(this, 'PropertyDefinition') || this;
        _this.stepName = 'property';
        _this.value = '';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return PropertyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PropertyDefinition = PropertyDefinition;
var PropertyExpressionDefinition = /** @class */ (function (_super) {
    __extends(PropertyExpressionDefinition, _super);
    function PropertyExpressionDefinition(init) {
        var _this = _super.call(this, 'PropertyExpressionDefinition') || this;
        _this.stepName = 'propertyExpression';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return PropertyExpressionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PropertyExpressionDefinition = PropertyExpressionDefinition;
var RecipientListDefinition = /** @class */ (function (_super) {
    __extends(RecipientListDefinition, _super);
    function RecipientListDefinition(init) {
        var _this = _super.call(this, 'RecipientListDefinition') || this;
        _this.stepName = 'recipientList';
        Object.assign(_this, init);
        return _this;
    }
    return RecipientListDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RecipientListDefinition = RecipientListDefinition;
var RedeliveryPolicyDefinition = /** @class */ (function (_super) {
    __extends(RedeliveryPolicyDefinition, _super);
    function RedeliveryPolicyDefinition(init) {
        var _this = _super.call(this, 'RedeliveryPolicyDefinition') || this;
        _this.stepName = 'redeliveryPolicy';
        Object.assign(_this, init);
        return _this;
    }
    return RedeliveryPolicyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RedeliveryPolicyDefinition = RedeliveryPolicyDefinition;
var RemoveHeaderDefinition = /** @class */ (function (_super) {
    __extends(RemoveHeaderDefinition, _super);
    function RemoveHeaderDefinition(init) {
        var _this = _super.call(this, 'RemoveHeaderDefinition') || this;
        _this.stepName = 'removeHeader';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return RemoveHeaderDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RemoveHeaderDefinition = RemoveHeaderDefinition;
var RemoveHeadersDefinition = /** @class */ (function (_super) {
    __extends(RemoveHeadersDefinition, _super);
    function RemoveHeadersDefinition(init) {
        var _this = _super.call(this, 'RemoveHeadersDefinition') || this;
        _this.stepName = 'removeHeaders';
        _this.pattern = '';
        Object.assign(_this, init);
        return _this;
    }
    return RemoveHeadersDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RemoveHeadersDefinition = RemoveHeadersDefinition;
var RemovePropertiesDefinition = /** @class */ (function (_super) {
    __extends(RemovePropertiesDefinition, _super);
    function RemovePropertiesDefinition(init) {
        var _this = _super.call(this, 'RemovePropertiesDefinition') || this;
        _this.stepName = 'removeProperties';
        _this.pattern = '';
        Object.assign(_this, init);
        return _this;
    }
    return RemovePropertiesDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RemovePropertiesDefinition = RemovePropertiesDefinition;
var RemovePropertyDefinition = /** @class */ (function (_super) {
    __extends(RemovePropertyDefinition, _super);
    function RemovePropertyDefinition(init) {
        var _this = _super.call(this, 'RemovePropertyDefinition') || this;
        _this.stepName = 'removeProperty';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return RemovePropertyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RemovePropertyDefinition = RemovePropertyDefinition;
var ResequenceDefinition = /** @class */ (function (_super) {
    __extends(ResequenceDefinition, _super);
    function ResequenceDefinition(init) {
        var _this = _super.call(this, 'ResequenceDefinition') || this;
        _this.expression = new ExpressionDefinition();
        _this.stepName = 'resequence';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return ResequenceDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ResequenceDefinition = ResequenceDefinition;
var Resilience4jConfigurationDefinition = /** @class */ (function (_super) {
    __extends(Resilience4jConfigurationDefinition, _super);
    function Resilience4jConfigurationDefinition(init) {
        var _this = _super.call(this, 'Resilience4jConfigurationDefinition') || this;
        _this.stepName = 'resilience4jConfiguration';
        Object.assign(_this, init);
        return _this;
    }
    return Resilience4jConfigurationDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.Resilience4jConfigurationDefinition = Resilience4jConfigurationDefinition;
var RestContextRefDefinition = /** @class */ (function (_super) {
    __extends(RestContextRefDefinition, _super);
    function RestContextRefDefinition(init) {
        var _this = _super.call(this, 'RestContextRefDefinition') || this;
        _this.ref = '';
        _this.stepName = 'restContextRef';
        Object.assign(_this, init);
        return _this;
    }
    return RestContextRefDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestContextRefDefinition = RestContextRefDefinition;
var ResumableDefinition = /** @class */ (function (_super) {
    __extends(ResumableDefinition, _super);
    function ResumableDefinition(init) {
        var _this = _super.call(this, 'ResumableDefinition') || this;
        _this.stepName = 'resumable';
        _this.resumeStrategy = '';
        Object.assign(_this, init);
        return _this;
    }
    return ResumableDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ResumableDefinition = ResumableDefinition;
var RollbackDefinition = /** @class */ (function (_super) {
    __extends(RollbackDefinition, _super);
    function RollbackDefinition(init) {
        var _this = _super.call(this, 'RollbackDefinition') || this;
        _this.stepName = 'rollback';
        Object.assign(_this, init);
        return _this;
    }
    return RollbackDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RollbackDefinition = RollbackDefinition;
var RouteBuilderDefinition = /** @class */ (function (_super) {
    __extends(RouteBuilderDefinition, _super);
    function RouteBuilderDefinition(init) {
        var _this = _super.call(this, 'RouteBuilderDefinition') || this;
        _this.ref = '';
        _this.stepName = 'routeBuilder';
        Object.assign(_this, init);
        return _this;
    }
    return RouteBuilderDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteBuilderDefinition = RouteBuilderDefinition;
var RouteConfigurationContextRefDefinition = /** @class */ (function (_super) {
    __extends(RouteConfigurationContextRefDefinition, _super);
    function RouteConfigurationContextRefDefinition(init) {
        var _this = _super.call(this, 'RouteConfigurationContextRefDefinition') || this;
        _this.ref = '';
        _this.stepName = 'routeConfigurationContextRef';
        Object.assign(_this, init);
        return _this;
    }
    return RouteConfigurationContextRefDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteConfigurationContextRefDefinition = RouteConfigurationContextRefDefinition;
var RouteConfigurationDefinition = /** @class */ (function (_super) {
    __extends(RouteConfigurationDefinition, _super);
    function RouteConfigurationDefinition(init) {
        var _this = _super.call(this, 'RouteConfigurationDefinition') || this;
        _this.onCompletion = [];
        _this.interceptSendToEndpoint = [];
        _this.stepName = 'routeConfiguration';
        _this.intercept = [];
        _this.onException = [];
        _this.interceptFrom = [];
        Object.assign(_this, init);
        return _this;
    }
    return RouteConfigurationDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteConfigurationDefinition = RouteConfigurationDefinition;
var RouteContextRefDefinition = /** @class */ (function (_super) {
    __extends(RouteContextRefDefinition, _super);
    function RouteContextRefDefinition(init) {
        var _this = _super.call(this, 'RouteContextRefDefinition') || this;
        _this.ref = '';
        _this.stepName = 'routeContextRef';
        Object.assign(_this, init);
        return _this;
    }
    return RouteContextRefDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteContextRefDefinition = RouteContextRefDefinition;
var RouteDefinition = /** @class */ (function (_super) {
    __extends(RouteDefinition, _super);
    function RouteDefinition(init) {
        var _this = _super.call(this, 'RouteDefinition') || this;
        _this.stepName = 'route';
        _this.from = new FromDefinition();
        Object.assign(_this, init);
        return _this;
    }
    return RouteDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteDefinition = RouteDefinition;
var RouteTemplateBeanDefinition = /** @class */ (function (_super) {
    __extends(RouteTemplateBeanDefinition, _super);
    function RouteTemplateBeanDefinition(init) {
        var _this = _super.call(this, 'RouteTemplateBeanDefinition') || this;
        _this.stepName = 'routeTemplateBean';
        _this.name = '';
        _this.property = [];
        _this.type = '';
        _this.properties = {};
        Object.assign(_this, init);
        return _this;
    }
    return RouteTemplateBeanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteTemplateBeanDefinition = RouteTemplateBeanDefinition;
var RouteTemplateDefinition = /** @class */ (function (_super) {
    __extends(RouteTemplateDefinition, _super);
    function RouteTemplateDefinition(init) {
        var _this = _super.call(this, 'RouteTemplateDefinition') || this;
        _this.stepName = 'routeTemplate';
        _this.beans = [];
        _this.from = new FromDefinition();
        _this.id = '';
        _this.parameters = [];
        Object.assign(_this, init);
        return _this;
    }
    return RouteTemplateDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteTemplateDefinition = RouteTemplateDefinition;
var RouteTemplateParameterDefinition = /** @class */ (function (_super) {
    __extends(RouteTemplateParameterDefinition, _super);
    function RouteTemplateParameterDefinition(init) {
        var _this = _super.call(this, 'RouteTemplateParameterDefinition') || this;
        _this.stepName = 'routeTemplateParameter';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return RouteTemplateParameterDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RouteTemplateParameterDefinition = RouteTemplateParameterDefinition;
var RoutingSlipDefinition = /** @class */ (function (_super) {
    __extends(RoutingSlipDefinition, _super);
    function RoutingSlipDefinition(init) {
        var _this = _super.call(this, 'RoutingSlipDefinition') || this;
        _this.stepName = 'routingSlip';
        Object.assign(_this, init);
        return _this;
    }
    return RoutingSlipDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RoutingSlipDefinition = RoutingSlipDefinition;
var SagaActionUriDefinition = /** @class */ (function (_super) {
    __extends(SagaActionUriDefinition, _super);
    function SagaActionUriDefinition(init) {
        var _this = _super.call(this, 'SagaActionUriDefinition') || this;
        _this.stepName = 'sagaActionUri';
        _this.parameters = {};
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return SagaActionUriDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SagaActionUriDefinition = SagaActionUriDefinition;
var SagaDefinition = /** @class */ (function (_super) {
    __extends(SagaDefinition, _super);
    function SagaDefinition(init) {
        var _this = _super.call(this, 'SagaDefinition') || this;
        _this.stepName = 'saga';
        _this.steps = [];
        _this.option = [];
        Object.assign(_this, init);
        return _this;
    }
    return SagaDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SagaDefinition = SagaDefinition;
var SamplingDefinition = /** @class */ (function (_super) {
    __extends(SamplingDefinition, _super);
    function SamplingDefinition(init) {
        var _this = _super.call(this, 'SamplingDefinition') || this;
        _this.stepName = 'sample';
        Object.assign(_this, init);
        return _this;
    }
    return SamplingDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SamplingDefinition = SamplingDefinition;
var ScriptDefinition = /** @class */ (function (_super) {
    __extends(ScriptDefinition, _super);
    function ScriptDefinition(init) {
        var _this = _super.call(this, 'ScriptDefinition') || this;
        _this.stepName = 'script';
        Object.assign(_this, init);
        return _this;
    }
    return ScriptDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ScriptDefinition = ScriptDefinition;
var SetBodyDefinition = /** @class */ (function (_super) {
    __extends(SetBodyDefinition, _super);
    function SetBodyDefinition(init) {
        var _this = _super.call(this, 'SetBodyDefinition') || this;
        _this.stepName = 'setBody';
        Object.assign(_this, init);
        return _this;
    }
    return SetBodyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SetBodyDefinition = SetBodyDefinition;
var SetExchangePatternDefinition = /** @class */ (function (_super) {
    __extends(SetExchangePatternDefinition, _super);
    function SetExchangePatternDefinition(init) {
        var _this = _super.call(this, 'SetExchangePatternDefinition') || this;
        _this.stepName = 'setExchangePattern';
        _this.pattern = '';
        Object.assign(_this, init);
        return _this;
    }
    return SetExchangePatternDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SetExchangePatternDefinition = SetExchangePatternDefinition;
var SetHeaderDefinition = /** @class */ (function (_super) {
    __extends(SetHeaderDefinition, _super);
    function SetHeaderDefinition(init) {
        var _this = _super.call(this, 'SetHeaderDefinition') || this;
        _this.stepName = 'setHeader';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return SetHeaderDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SetHeaderDefinition = SetHeaderDefinition;
var SetPropertyDefinition = /** @class */ (function (_super) {
    __extends(SetPropertyDefinition, _super);
    function SetPropertyDefinition(init) {
        var _this = _super.call(this, 'SetPropertyDefinition') || this;
        _this.stepName = 'setProperty';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return SetPropertyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SetPropertyDefinition = SetPropertyDefinition;
var SortDefinition = /** @class */ (function (_super) {
    __extends(SortDefinition, _super);
    function SortDefinition(init) {
        var _this = _super.call(this, 'SortDefinition') || this;
        _this.stepName = 'sort';
        Object.assign(_this, init);
        return _this;
    }
    return SortDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SortDefinition = SortDefinition;
var SplitDefinition = /** @class */ (function (_super) {
    __extends(SplitDefinition, _super);
    function SplitDefinition(init) {
        var _this = _super.call(this, 'SplitDefinition') || this;
        _this.steps = [];
        _this.stepName = 'split';
        Object.assign(_this, init);
        return _this;
    }
    return SplitDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SplitDefinition = SplitDefinition;
var StepDefinition = /** @class */ (function (_super) {
    __extends(StepDefinition, _super);
    function StepDefinition(init) {
        var _this = _super.call(this, 'StepDefinition') || this;
        _this.stepName = 'step';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return StepDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.StepDefinition = StepDefinition;
var StopDefinition = /** @class */ (function (_super) {
    __extends(StopDefinition, _super);
    function StopDefinition(init) {
        var _this = _super.call(this, 'StopDefinition') || this;
        _this.stepName = 'stop';
        Object.assign(_this, init);
        return _this;
    }
    return StopDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.StopDefinition = StopDefinition;
var TemplatedRouteBeanDefinition = /** @class */ (function (_super) {
    __extends(TemplatedRouteBeanDefinition, _super);
    function TemplatedRouteBeanDefinition(init) {
        var _this = _super.call(this, 'TemplatedRouteBeanDefinition') || this;
        _this.stepName = 'templatedRouteBean';
        _this.name = '';
        _this.property = [];
        _this.type = '';
        _this.properties = {};
        Object.assign(_this, init);
        return _this;
    }
    return TemplatedRouteBeanDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TemplatedRouteBeanDefinition = TemplatedRouteBeanDefinition;
var TemplatedRouteDefinition = /** @class */ (function (_super) {
    __extends(TemplatedRouteDefinition, _super);
    function TemplatedRouteDefinition(init) {
        var _this = _super.call(this, 'TemplatedRouteDefinition') || this;
        _this.stepName = 'templatedRoute';
        _this.beans = [];
        _this.parameters = [];
        _this.routeTemplateRef = '';
        Object.assign(_this, init);
        return _this;
    }
    return TemplatedRouteDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TemplatedRouteDefinition = TemplatedRouteDefinition;
var TemplatedRouteParameterDefinition = /** @class */ (function (_super) {
    __extends(TemplatedRouteParameterDefinition, _super);
    function TemplatedRouteParameterDefinition(init) {
        var _this = _super.call(this, 'TemplatedRouteParameterDefinition') || this;
        _this.stepName = 'templatedRouteParameter';
        _this.name = '';
        _this.value = '';
        Object.assign(_this, init);
        return _this;
    }
    return TemplatedRouteParameterDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TemplatedRouteParameterDefinition = TemplatedRouteParameterDefinition;
var ThreadPoolProfileDefinition = /** @class */ (function (_super) {
    __extends(ThreadPoolProfileDefinition, _super);
    function ThreadPoolProfileDefinition(init) {
        var _this = _super.call(this, 'ThreadPoolProfileDefinition') || this;
        _this.stepName = 'threadPoolProfile';
        Object.assign(_this, init);
        return _this;
    }
    return ThreadPoolProfileDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ThreadPoolProfileDefinition = ThreadPoolProfileDefinition;
var ThreadsDefinition = /** @class */ (function (_super) {
    __extends(ThreadsDefinition, _super);
    function ThreadsDefinition(init) {
        var _this = _super.call(this, 'ThreadsDefinition') || this;
        _this.stepName = 'threads';
        Object.assign(_this, init);
        return _this;
    }
    return ThreadsDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ThreadsDefinition = ThreadsDefinition;
var ThrottleDefinition = /** @class */ (function (_super) {
    __extends(ThrottleDefinition, _super);
    function ThrottleDefinition(init) {
        var _this = _super.call(this, 'ThrottleDefinition') || this;
        _this.stepName = 'throttle';
        Object.assign(_this, init);
        return _this;
    }
    return ThrottleDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ThrottleDefinition = ThrottleDefinition;
var ThrowExceptionDefinition = /** @class */ (function (_super) {
    __extends(ThrowExceptionDefinition, _super);
    function ThrowExceptionDefinition(init) {
        var _this = _super.call(this, 'ThrowExceptionDefinition') || this;
        _this.stepName = 'throwException';
        Object.assign(_this, init);
        return _this;
    }
    return ThrowExceptionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ThrowExceptionDefinition = ThrowExceptionDefinition;
var ToDefinition = /** @class */ (function (_super) {
    __extends(ToDefinition, _super);
    function ToDefinition(init) {
        var _this = _super.call(this, 'ToDefinition') || this;
        _this.stepName = 'to';
        _this.parameters = {};
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return ToDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ToDefinition = ToDefinition;
var ToDynamicDefinition = /** @class */ (function (_super) {
    __extends(ToDynamicDefinition, _super);
    function ToDynamicDefinition(init) {
        var _this = _super.call(this, 'ToDynamicDefinition') || this;
        _this.stepName = 'toD';
        _this.parameters = {};
        _this.uri = '';
        Object.assign(_this, init);
        return _this;
    }
    return ToDynamicDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ToDynamicDefinition = ToDynamicDefinition;
var TransactedDefinition = /** @class */ (function (_super) {
    __extends(TransactedDefinition, _super);
    function TransactedDefinition(init) {
        var _this = _super.call(this, 'TransactedDefinition') || this;
        _this.stepName = 'transacted';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return TransactedDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TransactedDefinition = TransactedDefinition;
var TransformDefinition = /** @class */ (function (_super) {
    __extends(TransformDefinition, _super);
    function TransformDefinition(init) {
        var _this = _super.call(this, 'TransformDefinition') || this;
        _this.stepName = 'transform';
        Object.assign(_this, init);
        return _this;
    }
    return TransformDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TransformDefinition = TransformDefinition;
var TryDefinition = /** @class */ (function (_super) {
    __extends(TryDefinition, _super);
    function TryDefinition(init) {
        var _this = _super.call(this, 'TryDefinition') || this;
        _this.stepName = 'doTry';
        _this.doCatch = [];
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return TryDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TryDefinition = TryDefinition;
var UnmarshalDefinition = /** @class */ (function (_super) {
    __extends(UnmarshalDefinition, _super);
    function UnmarshalDefinition(init) {
        var _this = _super.call(this, 'UnmarshalDefinition') || this;
        _this.stepName = 'unmarshal';
        Object.assign(_this, init);
        return _this;
    }
    return UnmarshalDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.UnmarshalDefinition = UnmarshalDefinition;
var ValidateDefinition = /** @class */ (function (_super) {
    __extends(ValidateDefinition, _super);
    function ValidateDefinition(init) {
        var _this = _super.call(this, 'ValidateDefinition') || this;
        _this.stepName = 'validate';
        Object.assign(_this, init);
        return _this;
    }
    return ValidateDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ValidateDefinition = ValidateDefinition;
var WhenDefinition = /** @class */ (function (_super) {
    __extends(WhenDefinition, _super);
    function WhenDefinition(init) {
        var _this = _super.call(this, 'WhenDefinition') || this;
        _this.stepName = 'when';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return WhenDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.WhenDefinition = WhenDefinition;
var WhenSkipSendToEndpointDefinition = /** @class */ (function (_super) {
    __extends(WhenSkipSendToEndpointDefinition, _super);
    function WhenSkipSendToEndpointDefinition(init) {
        var _this = _super.call(this, 'WhenSkipSendToEndpointDefinition') || this;
        _this.stepName = 'whenSkipSendToEndpoint';
        _this.steps = [];
        Object.assign(_this, init);
        return _this;
    }
    return WhenSkipSendToEndpointDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.WhenSkipSendToEndpointDefinition = WhenSkipSendToEndpointDefinition;
var WireTapDefinition = /** @class */ (function (_super) {
    __extends(WireTapDefinition, _super);
    function WireTapDefinition(init) {
        var _this = _super.call(this, 'WireTapDefinition') || this;
        _this.uri = '';
        _this.stepName = 'wireTap';
        _this.parameters = {};
        Object.assign(_this, init);
        return _this;
    }
    return WireTapDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.WireTapDefinition = WireTapDefinition;
var BlacklistServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(BlacklistServiceCallServiceFilterConfiguration, _super);
    function BlacklistServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'BlacklistServiceCallServiceFilterConfiguration') || this;
        _this.servers = [];
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return BlacklistServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.BlacklistServiceCallServiceFilterConfiguration = BlacklistServiceCallServiceFilterConfiguration;
var CachingServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(CachingServiceCallServiceDiscoveryConfiguration, _super);
    function CachingServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'CachingServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return CachingServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.CachingServiceCallServiceDiscoveryConfiguration = CachingServiceCallServiceDiscoveryConfiguration;
var CombinedServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(CombinedServiceCallServiceDiscoveryConfiguration, _super);
    function CombinedServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'CombinedServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return CombinedServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.CombinedServiceCallServiceDiscoveryConfiguration = CombinedServiceCallServiceDiscoveryConfiguration;
var CombinedServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(CombinedServiceCallServiceFilterConfiguration, _super);
    function CombinedServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'CombinedServiceCallServiceFilterConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return CombinedServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.CombinedServiceCallServiceFilterConfiguration = CombinedServiceCallServiceFilterConfiguration;
var ConsulServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(ConsulServiceCallServiceDiscoveryConfiguration, _super);
    function ConsulServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'ConsulServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ConsulServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ConsulServiceCallServiceDiscoveryConfiguration = ConsulServiceCallServiceDiscoveryConfiguration;
var CustomServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(CustomServiceCallServiceFilterConfiguration, _super);
    function CustomServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'CustomServiceCallServiceFilterConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return CustomServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.CustomServiceCallServiceFilterConfiguration = CustomServiceCallServiceFilterConfiguration;
var DefaultServiceCallServiceLoadBalancerConfiguration = /** @class */ (function (_super) {
    __extends(DefaultServiceCallServiceLoadBalancerConfiguration, _super);
    function DefaultServiceCallServiceLoadBalancerConfiguration(init) {
        var _this = _super.call(this, 'DefaultServiceCallServiceLoadBalancerConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return DefaultServiceCallServiceLoadBalancerConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.DefaultServiceCallServiceLoadBalancerConfiguration = DefaultServiceCallServiceLoadBalancerConfiguration;
var DnsServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(DnsServiceCallServiceDiscoveryConfiguration, _super);
    function DnsServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'DnsServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return DnsServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.DnsServiceCallServiceDiscoveryConfiguration = DnsServiceCallServiceDiscoveryConfiguration;
var HealthyServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(HealthyServiceCallServiceFilterConfiguration, _super);
    function HealthyServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'HealthyServiceCallServiceFilterConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return HealthyServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.HealthyServiceCallServiceFilterConfiguration = HealthyServiceCallServiceFilterConfiguration;
var KubernetesServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(KubernetesServiceCallServiceDiscoveryConfiguration, _super);
    function KubernetesServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'KubernetesServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return KubernetesServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.KubernetesServiceCallServiceDiscoveryConfiguration = KubernetesServiceCallServiceDiscoveryConfiguration;
var PassThroughServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(PassThroughServiceCallServiceFilterConfiguration, _super);
    function PassThroughServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'PassThroughServiceCallServiceFilterConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return PassThroughServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.PassThroughServiceCallServiceFilterConfiguration = PassThroughServiceCallServiceFilterConfiguration;
var ServiceCallConfigurationDefinition = /** @class */ (function (_super) {
    __extends(ServiceCallConfigurationDefinition, _super);
    function ServiceCallConfigurationDefinition(init) {
        var _this = _super.call(this, 'ServiceCallConfigurationDefinition') || this;
        _this.stepName = 'serviceCallConfiguration';
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallConfigurationDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallConfigurationDefinition = ServiceCallConfigurationDefinition;
var ServiceCallDefinition = /** @class */ (function (_super) {
    __extends(ServiceCallDefinition, _super);
    function ServiceCallDefinition(init) {
        var _this = _super.call(this, 'ServiceCallDefinition') || this;
        _this.stepName = 'serviceCall';
        _this.name = '';
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallDefinition = ServiceCallDefinition;
var ServiceCallExpressionConfiguration = /** @class */ (function (_super) {
    __extends(ServiceCallExpressionConfiguration, _super);
    function ServiceCallExpressionConfiguration(init) {
        var _this = _super.call(this, 'ServiceCallExpressionConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallExpressionConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallExpressionConfiguration = ServiceCallExpressionConfiguration;
var ServiceCallServiceChooserConfiguration = /** @class */ (function (_super) {
    __extends(ServiceCallServiceChooserConfiguration, _super);
    function ServiceCallServiceChooserConfiguration(init) {
        var _this = _super.call(this, 'ServiceCallServiceChooserConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallServiceChooserConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallServiceChooserConfiguration = ServiceCallServiceChooserConfiguration;
var ServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(ServiceCallServiceDiscoveryConfiguration, _super);
    function ServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'ServiceCallServiceDiscoveryConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallServiceDiscoveryConfiguration = ServiceCallServiceDiscoveryConfiguration;
var ServiceCallServiceFilterConfiguration = /** @class */ (function (_super) {
    __extends(ServiceCallServiceFilterConfiguration, _super);
    function ServiceCallServiceFilterConfiguration(init) {
        var _this = _super.call(this, 'ServiceCallServiceFilterConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallServiceFilterConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallServiceFilterConfiguration = ServiceCallServiceFilterConfiguration;
var ServiceCallServiceLoadBalancerConfiguration = /** @class */ (function (_super) {
    __extends(ServiceCallServiceLoadBalancerConfiguration, _super);
    function ServiceCallServiceLoadBalancerConfiguration(init) {
        var _this = _super.call(this, 'ServiceCallServiceLoadBalancerConfiguration') || this;
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ServiceCallServiceLoadBalancerConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ServiceCallServiceLoadBalancerConfiguration = ServiceCallServiceLoadBalancerConfiguration;
var StaticServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(StaticServiceCallServiceDiscoveryConfiguration, _super);
    function StaticServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'StaticServiceCallServiceDiscoveryConfiguration') || this;
        _this.servers = [];
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return StaticServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.StaticServiceCallServiceDiscoveryConfiguration = StaticServiceCallServiceDiscoveryConfiguration;
var ZooKeeperServiceCallServiceDiscoveryConfiguration = /** @class */ (function (_super) {
    __extends(ZooKeeperServiceCallServiceDiscoveryConfiguration, _super);
    function ZooKeeperServiceCallServiceDiscoveryConfiguration(init) {
        var _this = _super.call(this, 'ZooKeeperServiceCallServiceDiscoveryConfiguration') || this;
        _this.nodes = '';
        _this.basePath = '';
        _this.properties = [];
        Object.assign(_this, init);
        return _this;
    }
    return ZooKeeperServiceCallServiceDiscoveryConfiguration;
}(IntegrationDefinition_1.CamelElement));
exports.ZooKeeperServiceCallServiceDiscoveryConfiguration = ZooKeeperServiceCallServiceDiscoveryConfiguration;
var BatchResequencerConfig = /** @class */ (function (_super) {
    __extends(BatchResequencerConfig, _super);
    function BatchResequencerConfig(init) {
        var _this = _super.call(this, 'BatchResequencerConfig') || this;
        Object.assign(_this, init);
        return _this;
    }
    return BatchResequencerConfig;
}(IntegrationDefinition_1.CamelElement));
exports.BatchResequencerConfig = BatchResequencerConfig;
var StreamResequencerConfig = /** @class */ (function (_super) {
    __extends(StreamResequencerConfig, _super);
    function StreamResequencerConfig(init) {
        var _this = _super.call(this, 'StreamResequencerConfig') || this;
        Object.assign(_this, init);
        return _this;
    }
    return StreamResequencerConfig;
}(IntegrationDefinition_1.CamelElement));
exports.StreamResequencerConfig = StreamResequencerConfig;
var ASN1DataFormat = /** @class */ (function (_super) {
    __extends(ASN1DataFormat, _super);
    function ASN1DataFormat(init) {
        var _this = _super.call(this, 'ASN1DataFormat') || this;
        _this.dataFormatName = 'asn1';
        Object.assign(_this, init);
        return _this;
    }
    return ASN1DataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.ASN1DataFormat = ASN1DataFormat;
var Any23DataFormat = /** @class */ (function (_super) {
    __extends(Any23DataFormat, _super);
    function Any23DataFormat(init) {
        var _this = _super.call(this, 'Any23DataFormat') || this;
        _this.extractors = [];
        _this.configuration = [];
        _this.dataFormatName = 'any23';
        Object.assign(_this, init);
        return _this;
    }
    return Any23DataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.Any23DataFormat = Any23DataFormat;
var AvroDataFormat = /** @class */ (function (_super) {
    __extends(AvroDataFormat, _super);
    function AvroDataFormat(init) {
        var _this = _super.call(this, 'AvroDataFormat') || this;
        _this.dataFormatName = 'avro';
        Object.assign(_this, init);
        return _this;
    }
    return AvroDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.AvroDataFormat = AvroDataFormat;
var BarcodeDataFormat = /** @class */ (function (_super) {
    __extends(BarcodeDataFormat, _super);
    function BarcodeDataFormat(init) {
        var _this = _super.call(this, 'BarcodeDataFormat') || this;
        _this.dataFormatName = 'barcode';
        Object.assign(_this, init);
        return _this;
    }
    return BarcodeDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.BarcodeDataFormat = BarcodeDataFormat;
var Base64DataFormat = /** @class */ (function (_super) {
    __extends(Base64DataFormat, _super);
    function Base64DataFormat(init) {
        var _this = _super.call(this, 'Base64DataFormat') || this;
        _this.dataFormatName = 'base64';
        Object.assign(_this, init);
        return _this;
    }
    return Base64DataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.Base64DataFormat = Base64DataFormat;
var BindyDataFormat = /** @class */ (function (_super) {
    __extends(BindyDataFormat, _super);
    function BindyDataFormat(init) {
        var _this = _super.call(this, 'BindyDataFormat') || this;
        _this.dataFormatName = 'bindy';
        _this.type = '';
        Object.assign(_this, init);
        return _this;
    }
    return BindyDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.BindyDataFormat = BindyDataFormat;
var CBORDataFormat = /** @class */ (function (_super) {
    __extends(CBORDataFormat, _super);
    function CBORDataFormat(init) {
        var _this = _super.call(this, 'CBORDataFormat') || this;
        _this.dataFormatName = 'cbor';
        Object.assign(_this, init);
        return _this;
    }
    return CBORDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.CBORDataFormat = CBORDataFormat;
var CryptoDataFormat = /** @class */ (function (_super) {
    __extends(CryptoDataFormat, _super);
    function CryptoDataFormat(init) {
        var _this = _super.call(this, 'CryptoDataFormat') || this;
        _this.dataFormatName = 'crypto';
        Object.assign(_this, init);
        return _this;
    }
    return CryptoDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.CryptoDataFormat = CryptoDataFormat;
var CsvDataFormat = /** @class */ (function (_super) {
    __extends(CsvDataFormat, _super);
    function CsvDataFormat(init) {
        var _this = _super.call(this, 'CsvDataFormat') || this;
        _this.dataFormatName = 'csv';
        _this.header = [];
        Object.assign(_this, init);
        return _this;
    }
    return CsvDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.CsvDataFormat = CsvDataFormat;
var CustomDataFormat = /** @class */ (function (_super) {
    __extends(CustomDataFormat, _super);
    function CustomDataFormat(init) {
        var _this = _super.call(this, 'CustomDataFormat') || this;
        _this.ref = '';
        _this.dataFormatName = 'custom';
        Object.assign(_this, init);
        return _this;
    }
    return CustomDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.CustomDataFormat = CustomDataFormat;
var DataFormatsDefinition = /** @class */ (function (_super) {
    __extends(DataFormatsDefinition, _super);
    function DataFormatsDefinition(init) {
        var _this = _super.call(this, 'DataFormatsDefinition') || this;
        _this.stepName = 'dataFormats';
        Object.assign(_this, init);
        return _this;
    }
    return DataFormatsDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DataFormatsDefinition = DataFormatsDefinition;
var FhirJsonDataFormat = /** @class */ (function (_super) {
    __extends(FhirJsonDataFormat, _super);
    function FhirJsonDataFormat(init) {
        var _this = _super.call(this, 'FhirJsonDataFormat') || this;
        _this.dontStripVersionsFromReferencesAtPaths = [];
        _this.dataFormatName = 'fhirJson';
        _this.dontEncodeElements = [];
        _this.encodeElements = [];
        Object.assign(_this, init);
        return _this;
    }
    return FhirJsonDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.FhirJsonDataFormat = FhirJsonDataFormat;
var FhirXmlDataFormat = /** @class */ (function (_super) {
    __extends(FhirXmlDataFormat, _super);
    function FhirXmlDataFormat(init) {
        var _this = _super.call(this, 'FhirXmlDataFormat') || this;
        _this.dontStripVersionsFromReferencesAtPaths = [];
        _this.dataFormatName = 'fhirXml';
        _this.dontEncodeElements = [];
        _this.encodeElements = [];
        Object.assign(_this, init);
        return _this;
    }
    return FhirXmlDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.FhirXmlDataFormat = FhirXmlDataFormat;
var FlatpackDataFormat = /** @class */ (function (_super) {
    __extends(FlatpackDataFormat, _super);
    function FlatpackDataFormat(init) {
        var _this = _super.call(this, 'FlatpackDataFormat') || this;
        _this.dataFormatName = 'flatpack';
        Object.assign(_this, init);
        return _this;
    }
    return FlatpackDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.FlatpackDataFormat = FlatpackDataFormat;
var GrokDataFormat = /** @class */ (function (_super) {
    __extends(GrokDataFormat, _super);
    function GrokDataFormat(init) {
        var _this = _super.call(this, 'GrokDataFormat') || this;
        _this.dataFormatName = 'grok';
        _this.pattern = '';
        Object.assign(_this, init);
        return _this;
    }
    return GrokDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.GrokDataFormat = GrokDataFormat;
var GzipDeflaterDataFormat = /** @class */ (function (_super) {
    __extends(GzipDeflaterDataFormat, _super);
    function GzipDeflaterDataFormat(init) {
        var _this = _super.call(this, 'GzipDeflaterDataFormat') || this;
        _this.dataFormatName = 'gzipDeflater';
        Object.assign(_this, init);
        return _this;
    }
    return GzipDeflaterDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.GzipDeflaterDataFormat = GzipDeflaterDataFormat;
var HL7DataFormat = /** @class */ (function (_super) {
    __extends(HL7DataFormat, _super);
    function HL7DataFormat(init) {
        var _this = _super.call(this, 'HL7DataFormat') || this;
        _this.dataFormatName = 'hl7';
        Object.assign(_this, init);
        return _this;
    }
    return HL7DataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.HL7DataFormat = HL7DataFormat;
var IcalDataFormat = /** @class */ (function (_super) {
    __extends(IcalDataFormat, _super);
    function IcalDataFormat(init) {
        var _this = _super.call(this, 'IcalDataFormat') || this;
        _this.dataFormatName = 'ical';
        Object.assign(_this, init);
        return _this;
    }
    return IcalDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.IcalDataFormat = IcalDataFormat;
var JacksonXMLDataFormat = /** @class */ (function (_super) {
    __extends(JacksonXMLDataFormat, _super);
    function JacksonXMLDataFormat(init) {
        var _this = _super.call(this, 'JacksonXMLDataFormat') || this;
        _this.dataFormatName = 'jacksonXml';
        Object.assign(_this, init);
        return _this;
    }
    return JacksonXMLDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.JacksonXMLDataFormat = JacksonXMLDataFormat;
var JaxbDataFormat = /** @class */ (function (_super) {
    __extends(JaxbDataFormat, _super);
    function JaxbDataFormat(init) {
        var _this = _super.call(this, 'JaxbDataFormat') || this;
        _this.dataFormatName = 'jaxb';
        _this.contextPath = '';
        Object.assign(_this, init);
        return _this;
    }
    return JaxbDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.JaxbDataFormat = JaxbDataFormat;
var JsonApiDataFormat = /** @class */ (function (_super) {
    __extends(JsonApiDataFormat, _super);
    function JsonApiDataFormat(init) {
        var _this = _super.call(this, 'JsonApiDataFormat') || this;
        _this.dataFormatName = 'jsonApi';
        Object.assign(_this, init);
        return _this;
    }
    return JsonApiDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.JsonApiDataFormat = JsonApiDataFormat;
var JsonDataFormat = /** @class */ (function (_super) {
    __extends(JsonDataFormat, _super);
    function JsonDataFormat(init) {
        var _this = _super.call(this, 'JsonDataFormat') || this;
        _this.dataFormatName = 'json';
        Object.assign(_this, init);
        return _this;
    }
    return JsonDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.JsonDataFormat = JsonDataFormat;
var LZFDataFormat = /** @class */ (function (_super) {
    __extends(LZFDataFormat, _super);
    function LZFDataFormat(init) {
        var _this = _super.call(this, 'LZFDataFormat') || this;
        _this.dataFormatName = 'lzf';
        Object.assign(_this, init);
        return _this;
    }
    return LZFDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.LZFDataFormat = LZFDataFormat;
var MimeMultipartDataFormat = /** @class */ (function (_super) {
    __extends(MimeMultipartDataFormat, _super);
    function MimeMultipartDataFormat(init) {
        var _this = _super.call(this, 'MimeMultipartDataFormat') || this;
        _this.dataFormatName = 'mimeMultipart';
        Object.assign(_this, init);
        return _this;
    }
    return MimeMultipartDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.MimeMultipartDataFormat = MimeMultipartDataFormat;
var PGPDataFormat = /** @class */ (function (_super) {
    __extends(PGPDataFormat, _super);
    function PGPDataFormat(init) {
        var _this = _super.call(this, 'PGPDataFormat') || this;
        _this.dataFormatName = 'pgp';
        Object.assign(_this, init);
        return _this;
    }
    return PGPDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.PGPDataFormat = PGPDataFormat;
var ProtobufDataFormat = /** @class */ (function (_super) {
    __extends(ProtobufDataFormat, _super);
    function ProtobufDataFormat(init) {
        var _this = _super.call(this, 'ProtobufDataFormat') || this;
        _this.dataFormatName = 'protobuf';
        Object.assign(_this, init);
        return _this;
    }
    return ProtobufDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.ProtobufDataFormat = ProtobufDataFormat;
var RssDataFormat = /** @class */ (function (_super) {
    __extends(RssDataFormat, _super);
    function RssDataFormat(init) {
        var _this = _super.call(this, 'RssDataFormat') || this;
        _this.dataFormatName = 'rss';
        Object.assign(_this, init);
        return _this;
    }
    return RssDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.RssDataFormat = RssDataFormat;
var SoapDataFormat = /** @class */ (function (_super) {
    __extends(SoapDataFormat, _super);
    function SoapDataFormat(init) {
        var _this = _super.call(this, 'SoapDataFormat') || this;
        _this.dataFormatName = 'soap';
        _this.contextPath = '';
        Object.assign(_this, init);
        return _this;
    }
    return SoapDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.SoapDataFormat = SoapDataFormat;
var SyslogDataFormat = /** @class */ (function (_super) {
    __extends(SyslogDataFormat, _super);
    function SyslogDataFormat(init) {
        var _this = _super.call(this, 'SyslogDataFormat') || this;
        _this.dataFormatName = 'syslog';
        Object.assign(_this, init);
        return _this;
    }
    return SyslogDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.SyslogDataFormat = SyslogDataFormat;
var TarFileDataFormat = /** @class */ (function (_super) {
    __extends(TarFileDataFormat, _super);
    function TarFileDataFormat(init) {
        var _this = _super.call(this, 'TarFileDataFormat') || this;
        _this.dataFormatName = 'tarFile';
        Object.assign(_this, init);
        return _this;
    }
    return TarFileDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.TarFileDataFormat = TarFileDataFormat;
var ThriftDataFormat = /** @class */ (function (_super) {
    __extends(ThriftDataFormat, _super);
    function ThriftDataFormat(init) {
        var _this = _super.call(this, 'ThriftDataFormat') || this;
        _this.dataFormatName = 'thrift';
        Object.assign(_this, init);
        return _this;
    }
    return ThriftDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.ThriftDataFormat = ThriftDataFormat;
var TidyMarkupDataFormat = /** @class */ (function (_super) {
    __extends(TidyMarkupDataFormat, _super);
    function TidyMarkupDataFormat(init) {
        var _this = _super.call(this, 'TidyMarkupDataFormat') || this;
        _this.dataFormatName = 'tidyMarkup';
        Object.assign(_this, init);
        return _this;
    }
    return TidyMarkupDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.TidyMarkupDataFormat = TidyMarkupDataFormat;
var UniVocityCsvDataFormat = /** @class */ (function (_super) {
    __extends(UniVocityCsvDataFormat, _super);
    function UniVocityCsvDataFormat(init) {
        var _this = _super.call(this, 'UniVocityCsvDataFormat') || this;
        _this.dataFormatName = 'univocityCsv';
        _this.univocityHeader = [];
        Object.assign(_this, init);
        return _this;
    }
    return UniVocityCsvDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.UniVocityCsvDataFormat = UniVocityCsvDataFormat;
var UniVocityFixedDataFormat = /** @class */ (function (_super) {
    __extends(UniVocityFixedDataFormat, _super);
    function UniVocityFixedDataFormat(init) {
        var _this = _super.call(this, 'UniVocityFixedDataFormat') || this;
        _this.dataFormatName = 'univocityFixed';
        _this.univocityHeader = [];
        Object.assign(_this, init);
        return _this;
    }
    return UniVocityFixedDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.UniVocityFixedDataFormat = UniVocityFixedDataFormat;
var UniVocityHeader = /** @class */ (function (_super) {
    __extends(UniVocityHeader, _super);
    function UniVocityHeader(init) {
        var _this = _super.call(this, 'UniVocityHeader') || this;
        Object.assign(_this, init);
        return _this;
    }
    return UniVocityHeader;
}(IntegrationDefinition_1.CamelElement));
exports.UniVocityHeader = UniVocityHeader;
var UniVocityTsvDataFormat = /** @class */ (function (_super) {
    __extends(UniVocityTsvDataFormat, _super);
    function UniVocityTsvDataFormat(init) {
        var _this = _super.call(this, 'UniVocityTsvDataFormat') || this;
        _this.dataFormatName = 'univocityTsv';
        _this.univocityHeader = [];
        Object.assign(_this, init);
        return _this;
    }
    return UniVocityTsvDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.UniVocityTsvDataFormat = UniVocityTsvDataFormat;
var XMLSecurityDataFormat = /** @class */ (function (_super) {
    __extends(XMLSecurityDataFormat, _super);
    function XMLSecurityDataFormat(init) {
        var _this = _super.call(this, 'XMLSecurityDataFormat') || this;
        _this.dataFormatName = 'xmlSecurity';
        Object.assign(_this, init);
        return _this;
    }
    return XMLSecurityDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.XMLSecurityDataFormat = XMLSecurityDataFormat;
var XStreamDataFormat = /** @class */ (function (_super) {
    __extends(XStreamDataFormat, _super);
    function XStreamDataFormat(init) {
        var _this = _super.call(this, 'XStreamDataFormat') || this;
        _this.omitFields = [];
        _this.aliases = [];
        _this.implicitCollections = [];
        _this.dataFormatName = 'xstream';
        _this.converters = [];
        Object.assign(_this, init);
        return _this;
    }
    return XStreamDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.XStreamDataFormat = XStreamDataFormat;
var YAMLDataFormat = /** @class */ (function (_super) {
    __extends(YAMLDataFormat, _super);
    function YAMLDataFormat(init) {
        var _this = _super.call(this, 'YAMLDataFormat') || this;
        _this.dataFormatName = 'yaml';
        _this.typeFilter = [];
        Object.assign(_this, init);
        return _this;
    }
    return YAMLDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.YAMLDataFormat = YAMLDataFormat;
var YAMLTypeFilterDefinition = /** @class */ (function (_super) {
    __extends(YAMLTypeFilterDefinition, _super);
    function YAMLTypeFilterDefinition(init) {
        var _this = _super.call(this, 'YAMLTypeFilterDefinition') || this;
        _this.stepName = 'yAMLTypeFilter';
        Object.assign(_this, init);
        return _this;
    }
    return YAMLTypeFilterDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.YAMLTypeFilterDefinition = YAMLTypeFilterDefinition;
var ZipDeflaterDataFormat = /** @class */ (function (_super) {
    __extends(ZipDeflaterDataFormat, _super);
    function ZipDeflaterDataFormat(init) {
        var _this = _super.call(this, 'ZipDeflaterDataFormat') || this;
        _this.dataFormatName = 'zipDeflater';
        Object.assign(_this, init);
        return _this;
    }
    return ZipDeflaterDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.ZipDeflaterDataFormat = ZipDeflaterDataFormat;
var ZipFileDataFormat = /** @class */ (function (_super) {
    __extends(ZipFileDataFormat, _super);
    function ZipFileDataFormat(init) {
        var _this = _super.call(this, 'ZipFileDataFormat') || this;
        _this.dataFormatName = 'zipFile';
        Object.assign(_this, init);
        return _this;
    }
    return ZipFileDataFormat;
}(IntegrationDefinition_1.CamelElement));
exports.ZipFileDataFormat = ZipFileDataFormat;
var DeadLetterChannelDefinition = /** @class */ (function (_super) {
    __extends(DeadLetterChannelDefinition, _super);
    function DeadLetterChannelDefinition(init) {
        var _this = _super.call(this, 'DeadLetterChannelDefinition') || this;
        _this.deadLetterUri = '';
        _this.stepName = 'deadLetterChannel';
        Object.assign(_this, init);
        return _this;
    }
    return DeadLetterChannelDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DeadLetterChannelDefinition = DeadLetterChannelDefinition;
var DefaultErrorHandlerDefinition = /** @class */ (function (_super) {
    __extends(DefaultErrorHandlerDefinition, _super);
    function DefaultErrorHandlerDefinition(init) {
        var _this = _super.call(this, 'DefaultErrorHandlerDefinition') || this;
        _this.stepName = 'defaultErrorHandler';
        Object.assign(_this, init);
        return _this;
    }
    return DefaultErrorHandlerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DefaultErrorHandlerDefinition = DefaultErrorHandlerDefinition;
var ErrorHandlerRefDefinition = /** @class */ (function (_super) {
    __extends(ErrorHandlerRefDefinition, _super);
    function ErrorHandlerRefDefinition(init) {
        var _this = _super.call(this, 'ErrorHandlerRefDefinition') || this;
        _this.ref = '';
        _this.stepName = 'errorHandlerRef';
        Object.assign(_this, init);
        return _this;
    }
    return ErrorHandlerRefDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ErrorHandlerRefDefinition = ErrorHandlerRefDefinition;
var JtaTransactionErrorHandlerDefinition = /** @class */ (function (_super) {
    __extends(JtaTransactionErrorHandlerDefinition, _super);
    function JtaTransactionErrorHandlerDefinition(init) {
        var _this = _super.call(this, 'JtaTransactionErrorHandlerDefinition') || this;
        _this.stepName = 'jtaTransactionErrorHandler';
        Object.assign(_this, init);
        return _this;
    }
    return JtaTransactionErrorHandlerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.JtaTransactionErrorHandlerDefinition = JtaTransactionErrorHandlerDefinition;
var NoErrorHandlerDefinition = /** @class */ (function (_super) {
    __extends(NoErrorHandlerDefinition, _super);
    function NoErrorHandlerDefinition(init) {
        var _this = _super.call(this, 'NoErrorHandlerDefinition') || this;
        _this.stepName = 'noErrorHandler';
        Object.assign(_this, init);
        return _this;
    }
    return NoErrorHandlerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.NoErrorHandlerDefinition = NoErrorHandlerDefinition;
var SpringTransactionErrorHandlerDefinition = /** @class */ (function (_super) {
    __extends(SpringTransactionErrorHandlerDefinition, _super);
    function SpringTransactionErrorHandlerDefinition(init) {
        var _this = _super.call(this, 'SpringTransactionErrorHandlerDefinition') || this;
        _this.stepName = 'springTransactionErrorHandler';
        Object.assign(_this, init);
        return _this;
    }
    return SpringTransactionErrorHandlerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SpringTransactionErrorHandlerDefinition = SpringTransactionErrorHandlerDefinition;
var CSimpleExpression = /** @class */ (function (_super) {
    __extends(CSimpleExpression, _super);
    function CSimpleExpression(init) {
        var _this = _super.call(this, 'CSimpleExpression') || this;
        _this.expression = '';
        _this.expressionName = 'csimple';
        Object.assign(_this, init);
        return _this;
    }
    return CSimpleExpression;
}(IntegrationDefinition_1.CamelElement));
exports.CSimpleExpression = CSimpleExpression;
var ConstantExpression = /** @class */ (function (_super) {
    __extends(ConstantExpression, _super);
    function ConstantExpression(init) {
        var _this = _super.call(this, 'ConstantExpression') || this;
        _this.expression = '';
        _this.expressionName = 'constant';
        Object.assign(_this, init);
        return _this;
    }
    return ConstantExpression;
}(IntegrationDefinition_1.CamelElement));
exports.ConstantExpression = ConstantExpression;
var DatasonnetExpression = /** @class */ (function (_super) {
    __extends(DatasonnetExpression, _super);
    function DatasonnetExpression(init) {
        var _this = _super.call(this, 'DatasonnetExpression') || this;
        _this.expression = '';
        _this.expressionName = 'datasonnet';
        Object.assign(_this, init);
        return _this;
    }
    return DatasonnetExpression;
}(IntegrationDefinition_1.CamelElement));
exports.DatasonnetExpression = DatasonnetExpression;
var ExchangePropertyExpression = /** @class */ (function (_super) {
    __extends(ExchangePropertyExpression, _super);
    function ExchangePropertyExpression(init) {
        var _this = _super.call(this, 'ExchangePropertyExpression') || this;
        _this.expression = '';
        _this.expressionName = 'exchangeProperty';
        Object.assign(_this, init);
        return _this;
    }
    return ExchangePropertyExpression;
}(IntegrationDefinition_1.CamelElement));
exports.ExchangePropertyExpression = ExchangePropertyExpression;
var ExpressionDefinition = /** @class */ (function (_super) {
    __extends(ExpressionDefinition, _super);
    function ExpressionDefinition(init) {
        var _this = _super.call(this, 'ExpressionDefinition') || this;
        _this.stepName = 'expression';
        Object.assign(_this, init);
        return _this;
    }
    return ExpressionDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ExpressionDefinition = ExpressionDefinition;
var GroovyExpression = /** @class */ (function (_super) {
    __extends(GroovyExpression, _super);
    function GroovyExpression(init) {
        var _this = _super.call(this, 'GroovyExpression') || this;
        _this.expression = '';
        _this.expressionName = 'groovy';
        Object.assign(_this, init);
        return _this;
    }
    return GroovyExpression;
}(IntegrationDefinition_1.CamelElement));
exports.GroovyExpression = GroovyExpression;
var HeaderExpression = /** @class */ (function (_super) {
    __extends(HeaderExpression, _super);
    function HeaderExpression(init) {
        var _this = _super.call(this, 'HeaderExpression') || this;
        _this.expression = '';
        _this.expressionName = 'header';
        Object.assign(_this, init);
        return _this;
    }
    return HeaderExpression;
}(IntegrationDefinition_1.CamelElement));
exports.HeaderExpression = HeaderExpression;
var Hl7TerserExpression = /** @class */ (function (_super) {
    __extends(Hl7TerserExpression, _super);
    function Hl7TerserExpression(init) {
        var _this = _super.call(this, 'Hl7TerserExpression') || this;
        _this.expression = '';
        _this.expressionName = 'hl7terser';
        Object.assign(_this, init);
        return _this;
    }
    return Hl7TerserExpression;
}(IntegrationDefinition_1.CamelElement));
exports.Hl7TerserExpression = Hl7TerserExpression;
var JoorExpression = /** @class */ (function (_super) {
    __extends(JoorExpression, _super);
    function JoorExpression(init) {
        var _this = _super.call(this, 'JoorExpression') || this;
        _this.expression = '';
        _this.expressionName = 'joor';
        Object.assign(_this, init);
        return _this;
    }
    return JoorExpression;
}(IntegrationDefinition_1.CamelElement));
exports.JoorExpression = JoorExpression;
var JqExpression = /** @class */ (function (_super) {
    __extends(JqExpression, _super);
    function JqExpression(init) {
        var _this = _super.call(this, 'JqExpression') || this;
        _this.expression = '';
        _this.expressionName = 'jq';
        Object.assign(_this, init);
        return _this;
    }
    return JqExpression;
}(IntegrationDefinition_1.CamelElement));
exports.JqExpression = JqExpression;
var JsonPathExpression = /** @class */ (function (_super) {
    __extends(JsonPathExpression, _super);
    function JsonPathExpression(init) {
        var _this = _super.call(this, 'JsonPathExpression') || this;
        _this.expression = '';
        _this.expressionName = 'jsonpath';
        Object.assign(_this, init);
        return _this;
    }
    return JsonPathExpression;
}(IntegrationDefinition_1.CamelElement));
exports.JsonPathExpression = JsonPathExpression;
var LanguageExpression = /** @class */ (function (_super) {
    __extends(LanguageExpression, _super);
    function LanguageExpression(init) {
        var _this = _super.call(this, 'LanguageExpression') || this;
        _this.expression = '';
        _this.expressionName = 'language';
        _this.language = '';
        Object.assign(_this, init);
        return _this;
    }
    return LanguageExpression;
}(IntegrationDefinition_1.CamelElement));
exports.LanguageExpression = LanguageExpression;
var MethodCallExpression = /** @class */ (function (_super) {
    __extends(MethodCallExpression, _super);
    function MethodCallExpression(init) {
        var _this = _super.call(this, 'MethodCallExpression') || this;
        _this.expressionName = 'method';
        Object.assign(_this, init);
        return _this;
    }
    return MethodCallExpression;
}(IntegrationDefinition_1.CamelElement));
exports.MethodCallExpression = MethodCallExpression;
var MvelExpression = /** @class */ (function (_super) {
    __extends(MvelExpression, _super);
    function MvelExpression(init) {
        var _this = _super.call(this, 'MvelExpression') || this;
        _this.expression = '';
        _this.expressionName = 'mvel';
        Object.assign(_this, init);
        return _this;
    }
    return MvelExpression;
}(IntegrationDefinition_1.CamelElement));
exports.MvelExpression = MvelExpression;
var OgnlExpression = /** @class */ (function (_super) {
    __extends(OgnlExpression, _super);
    function OgnlExpression(init) {
        var _this = _super.call(this, 'OgnlExpression') || this;
        _this.expression = '';
        _this.expressionName = 'ognl';
        Object.assign(_this, init);
        return _this;
    }
    return OgnlExpression;
}(IntegrationDefinition_1.CamelElement));
exports.OgnlExpression = OgnlExpression;
var RefExpression = /** @class */ (function (_super) {
    __extends(RefExpression, _super);
    function RefExpression(init) {
        var _this = _super.call(this, 'RefExpression') || this;
        _this.expression = '';
        _this.expressionName = 'ref';
        Object.assign(_this, init);
        return _this;
    }
    return RefExpression;
}(IntegrationDefinition_1.CamelElement));
exports.RefExpression = RefExpression;
var SimpleExpression = /** @class */ (function (_super) {
    __extends(SimpleExpression, _super);
    function SimpleExpression(init) {
        var _this = _super.call(this, 'SimpleExpression') || this;
        _this.expression = '';
        _this.expressionName = 'simple';
        Object.assign(_this, init);
        return _this;
    }
    return SimpleExpression;
}(IntegrationDefinition_1.CamelElement));
exports.SimpleExpression = SimpleExpression;
var SpELExpression = /** @class */ (function (_super) {
    __extends(SpELExpression, _super);
    function SpELExpression(init) {
        var _this = _super.call(this, 'SpELExpression') || this;
        _this.expression = '';
        _this.expressionName = 'spel';
        Object.assign(_this, init);
        return _this;
    }
    return SpELExpression;
}(IntegrationDefinition_1.CamelElement));
exports.SpELExpression = SpELExpression;
var TokenizerExpression = /** @class */ (function (_super) {
    __extends(TokenizerExpression, _super);
    function TokenizerExpression(init) {
        var _this = _super.call(this, 'TokenizerExpression') || this;
        _this.expressionName = 'tokenize';
        _this.token = '';
        Object.assign(_this, init);
        return _this;
    }
    return TokenizerExpression;
}(IntegrationDefinition_1.CamelElement));
exports.TokenizerExpression = TokenizerExpression;
var XMLTokenizerExpression = /** @class */ (function (_super) {
    __extends(XMLTokenizerExpression, _super);
    function XMLTokenizerExpression(init) {
        var _this = _super.call(this, 'XMLTokenizerExpression') || this;
        _this.expressionName = 'xtokenize';
        Object.assign(_this, init);
        return _this;
    }
    return XMLTokenizerExpression;
}(IntegrationDefinition_1.CamelElement));
exports.XMLTokenizerExpression = XMLTokenizerExpression;
var XPathExpression = /** @class */ (function (_super) {
    __extends(XPathExpression, _super);
    function XPathExpression(init) {
        var _this = _super.call(this, 'XPathExpression') || this;
        _this.expression = '';
        _this.expressionName = 'xpath';
        Object.assign(_this, init);
        return _this;
    }
    return XPathExpression;
}(IntegrationDefinition_1.CamelElement));
exports.XPathExpression = XPathExpression;
var XQueryExpression = /** @class */ (function (_super) {
    __extends(XQueryExpression, _super);
    function XQueryExpression(init) {
        var _this = _super.call(this, 'XQueryExpression') || this;
        _this.expression = '';
        _this.expressionName = 'xquery';
        Object.assign(_this, init);
        return _this;
    }
    return XQueryExpression;
}(IntegrationDefinition_1.CamelElement));
exports.XQueryExpression = XQueryExpression;
var CustomLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(CustomLoadBalancerDefinition, _super);
    function CustomLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'CustomLoadBalancerDefinition') || this;
        _this.ref = '';
        _this.stepName = 'customLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return CustomLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.CustomLoadBalancerDefinition = CustomLoadBalancerDefinition;
var FailoverLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(FailoverLoadBalancerDefinition, _super);
    function FailoverLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'FailoverLoadBalancerDefinition') || this;
        _this.exception = [];
        _this.stepName = 'failoverLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return FailoverLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.FailoverLoadBalancerDefinition = FailoverLoadBalancerDefinition;
var RandomLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(RandomLoadBalancerDefinition, _super);
    function RandomLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'RandomLoadBalancerDefinition') || this;
        _this.stepName = 'randomLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return RandomLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RandomLoadBalancerDefinition = RandomLoadBalancerDefinition;
var RoundRobinLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(RoundRobinLoadBalancerDefinition, _super);
    function RoundRobinLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'RoundRobinLoadBalancerDefinition') || this;
        _this.stepName = 'roundRobinLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return RoundRobinLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RoundRobinLoadBalancerDefinition = RoundRobinLoadBalancerDefinition;
var StickyLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(StickyLoadBalancerDefinition, _super);
    function StickyLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'StickyLoadBalancerDefinition') || this;
        _this.stepName = 'stickyLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return StickyLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.StickyLoadBalancerDefinition = StickyLoadBalancerDefinition;
var TopicLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(TopicLoadBalancerDefinition, _super);
    function TopicLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'TopicLoadBalancerDefinition') || this;
        _this.stepName = 'topicLoadBalancer';
        Object.assign(_this, init);
        return _this;
    }
    return TopicLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TopicLoadBalancerDefinition = TopicLoadBalancerDefinition;
var WeightedLoadBalancerDefinition = /** @class */ (function (_super) {
    __extends(WeightedLoadBalancerDefinition, _super);
    function WeightedLoadBalancerDefinition(init) {
        var _this = _super.call(this, 'WeightedLoadBalancerDefinition') || this;
        _this.stepName = 'weightedLoadBalancer';
        _this.distributionRatio = '';
        Object.assign(_this, init);
        return _this;
    }
    return WeightedLoadBalancerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.WeightedLoadBalancerDefinition = WeightedLoadBalancerDefinition;
var ApiKeyDefinition = /** @class */ (function (_super) {
    __extends(ApiKeyDefinition, _super);
    function ApiKeyDefinition(init) {
        var _this = _super.call(this, 'ApiKeyDefinition') || this;
        _this.stepName = 'apiKey';
        _this.name = '';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return ApiKeyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ApiKeyDefinition = ApiKeyDefinition;
var BasicAuthDefinition = /** @class */ (function (_super) {
    __extends(BasicAuthDefinition, _super);
    function BasicAuthDefinition(init) {
        var _this = _super.call(this, 'BasicAuthDefinition') || this;
        _this.stepName = 'basicAuth';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return BasicAuthDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.BasicAuthDefinition = BasicAuthDefinition;
var BearerTokenDefinition = /** @class */ (function (_super) {
    __extends(BearerTokenDefinition, _super);
    function BearerTokenDefinition(init) {
        var _this = _super.call(this, 'BearerTokenDefinition') || this;
        _this.stepName = 'bearerToken';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return BearerTokenDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.BearerTokenDefinition = BearerTokenDefinition;
var DeleteDefinition = /** @class */ (function (_super) {
    __extends(DeleteDefinition, _super);
    function DeleteDefinition(init) {
        var _this = _super.call(this, 'DeleteDefinition') || this;
        _this.security = [];
        _this.stepName = 'delete';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return DeleteDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DeleteDefinition = DeleteDefinition;
var GetDefinition = /** @class */ (function (_super) {
    __extends(GetDefinition, _super);
    function GetDefinition(init) {
        var _this = _super.call(this, 'GetDefinition') || this;
        _this.security = [];
        _this.stepName = 'get';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return GetDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.GetDefinition = GetDefinition;
var HeadDefinition = /** @class */ (function (_super) {
    __extends(HeadDefinition, _super);
    function HeadDefinition(init) {
        var _this = _super.call(this, 'HeadDefinition') || this;
        _this.security = [];
        _this.stepName = 'head';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return HeadDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.HeadDefinition = HeadDefinition;
var MutualTLSDefinition = /** @class */ (function (_super) {
    __extends(MutualTLSDefinition, _super);
    function MutualTLSDefinition(init) {
        var _this = _super.call(this, 'MutualTLSDefinition') || this;
        _this.stepName = 'mutualTLS';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return MutualTLSDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.MutualTLSDefinition = MutualTLSDefinition;
var OAuth2Definition = /** @class */ (function (_super) {
    __extends(OAuth2Definition, _super);
    function OAuth2Definition(init) {
        var _this = _super.call(this, 'OAuth2Definition') || this;
        _this.stepName = 'oAuth2';
        _this.scopes = [];
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return OAuth2Definition;
}(IntegrationDefinition_1.CamelElement));
exports.OAuth2Definition = OAuth2Definition;
var OpenIdConnectDefinition = /** @class */ (function (_super) {
    __extends(OpenIdConnectDefinition, _super);
    function OpenIdConnectDefinition(init) {
        var _this = _super.call(this, 'OpenIdConnectDefinition') || this;
        _this.stepName = 'openIdConnect';
        _this.key = '';
        _this.url = '';
        Object.assign(_this, init);
        return _this;
    }
    return OpenIdConnectDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.OpenIdConnectDefinition = OpenIdConnectDefinition;
var ParamDefinition = /** @class */ (function (_super) {
    __extends(ParamDefinition, _super);
    function ParamDefinition(init) {
        var _this = _super.call(this, 'ParamDefinition') || this;
        _this.examples = [];
        _this.stepName = 'param';
        _this.name = '';
        _this.type = '';
        _this.value = [];
        Object.assign(_this, init);
        return _this;
    }
    return ParamDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ParamDefinition = ParamDefinition;
var PatchDefinition = /** @class */ (function (_super) {
    __extends(PatchDefinition, _super);
    function PatchDefinition(init) {
        var _this = _super.call(this, 'PatchDefinition') || this;
        _this.security = [];
        _this.stepName = 'patch';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return PatchDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PatchDefinition = PatchDefinition;
var PostDefinition = /** @class */ (function (_super) {
    __extends(PostDefinition, _super);
    function PostDefinition(init) {
        var _this = _super.call(this, 'PostDefinition') || this;
        _this.security = [];
        _this.stepName = 'post';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return PostDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PostDefinition = PostDefinition;
var PutDefinition = /** @class */ (function (_super) {
    __extends(PutDefinition, _super);
    function PutDefinition(init) {
        var _this = _super.call(this, 'PutDefinition') || this;
        _this.security = [];
        _this.stepName = 'put';
        _this.param = [];
        _this.responseMessage = [];
        Object.assign(_this, init);
        return _this;
    }
    return PutDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PutDefinition = PutDefinition;
var ResponseHeaderDefinition = /** @class */ (function (_super) {
    __extends(ResponseHeaderDefinition, _super);
    function ResponseHeaderDefinition(init) {
        var _this = _super.call(this, 'ResponseHeaderDefinition') || this;
        _this.stepName = 'responseHeader';
        _this.name = '';
        _this.value = [];
        Object.assign(_this, init);
        return _this;
    }
    return ResponseHeaderDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ResponseHeaderDefinition = ResponseHeaderDefinition;
var ResponseMessageDefinition = /** @class */ (function (_super) {
    __extends(ResponseMessageDefinition, _super);
    function ResponseMessageDefinition(init) {
        var _this = _super.call(this, 'ResponseMessageDefinition') || this;
        _this.examples = [];
        _this.stepName = 'responseMessage';
        _this.header = [];
        _this.message = '';
        Object.assign(_this, init);
        return _this;
    }
    return ResponseMessageDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ResponseMessageDefinition = ResponseMessageDefinition;
var RestBindingDefinition = /** @class */ (function (_super) {
    __extends(RestBindingDefinition, _super);
    function RestBindingDefinition(init) {
        var _this = _super.call(this, 'RestBindingDefinition') || this;
        _this.stepName = 'restBinding';
        Object.assign(_this, init);
        return _this;
    }
    return RestBindingDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestBindingDefinition = RestBindingDefinition;
var RestConfigurationDefinition = /** @class */ (function (_super) {
    __extends(RestConfigurationDefinition, _super);
    function RestConfigurationDefinition(init) {
        var _this = _super.call(this, 'RestConfigurationDefinition') || this;
        _this.consumerProperty = [];
        _this.apiProperty = [];
        _this.componentProperty = [];
        _this.corsHeaders = [];
        _this.stepName = 'restConfiguration';
        _this.endpointProperty = [];
        _this.dataFormatProperty = [];
        Object.assign(_this, init);
        return _this;
    }
    return RestConfigurationDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestConfigurationDefinition = RestConfigurationDefinition;
var RestDefinition = /** @class */ (function (_super) {
    __extends(RestDefinition, _super);
    function RestDefinition(init) {
        var _this = _super.call(this, 'RestDefinition') || this;
        _this.securityRequirements = [];
        _this.delete = [];
        _this.put = [];
        _this.head = [];
        _this.patch = [];
        _this.post = [];
        _this.stepName = 'rest';
        _this.get = [];
        Object.assign(_this, init);
        return _this;
    }
    return RestDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestDefinition = RestDefinition;
var RestPropertyDefinition = /** @class */ (function (_super) {
    __extends(RestPropertyDefinition, _super);
    function RestPropertyDefinition(init) {
        var _this = _super.call(this, 'RestPropertyDefinition') || this;
        _this.stepName = 'restProperty';
        _this.value = '';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return RestPropertyDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestPropertyDefinition = RestPropertyDefinition;
var RestSecuritiesDefinition = /** @class */ (function (_super) {
    __extends(RestSecuritiesDefinition, _super);
    function RestSecuritiesDefinition(init) {
        var _this = _super.call(this, 'RestSecuritiesDefinition') || this;
        _this.stepName = 'restSecurities';
        Object.assign(_this, init);
        return _this;
    }
    return RestSecuritiesDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestSecuritiesDefinition = RestSecuritiesDefinition;
var RestsDefinition = /** @class */ (function (_super) {
    __extends(RestsDefinition, _super);
    function RestsDefinition(init) {
        var _this = _super.call(this, 'RestsDefinition') || this;
        _this.rest = [];
        _this.stepName = 'rests';
        Object.assign(_this, init);
        return _this;
    }
    return RestsDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.RestsDefinition = RestsDefinition;
var SecurityDefinition = /** @class */ (function (_super) {
    __extends(SecurityDefinition, _super);
    function SecurityDefinition(init) {
        var _this = _super.call(this, 'SecurityDefinition') || this;
        _this.stepName = 'security';
        _this.key = '';
        Object.assign(_this, init);
        return _this;
    }
    return SecurityDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.SecurityDefinition = SecurityDefinition;
var CustomTransformerDefinition = /** @class */ (function (_super) {
    __extends(CustomTransformerDefinition, _super);
    function CustomTransformerDefinition(init) {
        var _this = _super.call(this, 'CustomTransformerDefinition') || this;
        _this.stepName = 'customTransformer';
        Object.assign(_this, init);
        return _this;
    }
    return CustomTransformerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.CustomTransformerDefinition = CustomTransformerDefinition;
var DataFormatTransformerDefinition = /** @class */ (function (_super) {
    __extends(DataFormatTransformerDefinition, _super);
    function DataFormatTransformerDefinition(init) {
        var _this = _super.call(this, 'DataFormatTransformerDefinition') || this;
        _this.stepName = 'dataFormatTransformer';
        Object.assign(_this, init);
        return _this;
    }
    return DataFormatTransformerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.DataFormatTransformerDefinition = DataFormatTransformerDefinition;
var EndpointTransformerDefinition = /** @class */ (function (_super) {
    __extends(EndpointTransformerDefinition, _super);
    function EndpointTransformerDefinition(init) {
        var _this = _super.call(this, 'EndpointTransformerDefinition') || this;
        _this.stepName = 'endpointTransformer';
        Object.assign(_this, init);
        return _this;
    }
    return EndpointTransformerDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.EndpointTransformerDefinition = EndpointTransformerDefinition;
var TransformersDefinition = /** @class */ (function (_super) {
    __extends(TransformersDefinition, _super);
    function TransformersDefinition(init) {
        var _this = _super.call(this, 'TransformersDefinition') || this;
        _this.stepName = 'transformers';
        Object.assign(_this, init);
        return _this;
    }
    return TransformersDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.TransformersDefinition = TransformersDefinition;
var CustomValidatorDefinition = /** @class */ (function (_super) {
    __extends(CustomValidatorDefinition, _super);
    function CustomValidatorDefinition(init) {
        var _this = _super.call(this, 'CustomValidatorDefinition') || this;
        _this.stepName = 'customValidator';
        Object.assign(_this, init);
        return _this;
    }
    return CustomValidatorDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.CustomValidatorDefinition = CustomValidatorDefinition;
var EndpointValidatorDefinition = /** @class */ (function (_super) {
    __extends(EndpointValidatorDefinition, _super);
    function EndpointValidatorDefinition(init) {
        var _this = _super.call(this, 'EndpointValidatorDefinition') || this;
        _this.stepName = 'endpointValidator';
        Object.assign(_this, init);
        return _this;
    }
    return EndpointValidatorDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.EndpointValidatorDefinition = EndpointValidatorDefinition;
var PredicateValidatorDefinition = /** @class */ (function (_super) {
    __extends(PredicateValidatorDefinition, _super);
    function PredicateValidatorDefinition(init) {
        var _this = _super.call(this, 'PredicateValidatorDefinition') || this;
        _this.stepName = 'predicateValidator';
        Object.assign(_this, init);
        return _this;
    }
    return PredicateValidatorDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.PredicateValidatorDefinition = PredicateValidatorDefinition;
var ValidatorsDefinition = /** @class */ (function (_super) {
    __extends(ValidatorsDefinition, _super);
    function ValidatorsDefinition(init) {
        var _this = _super.call(this, 'ValidatorsDefinition') || this;
        _this.stepName = 'validators';
        Object.assign(_this, init);
        return _this;
    }
    return ValidatorsDefinition;
}(IntegrationDefinition_1.CamelElement));
exports.ValidatorsDefinition = ValidatorsDefinition;
